import { ElementBuilder, ParentChildBuilder } from "./builders.js";

class ParagraphBuilder extends ParentChildBuilder {
  constructor() {
    super("p", "span");
  }
}

class ListBuilder extends ParentChildBuilder {
  constructor() {
    super("ul", "li");
  }
}

function formatRuntime(runtime) {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return hours + "h " + minutes + "m";
}

// --- Task 2.2 & 1.4: Movies laden und anzeigen ---
function appendMovie(movie, element) {
  const article = new ElementBuilder("article").id(movie.imdbID);

  // Poster
  article.append(new ElementBuilder("img").with("src", movie.Poster));

  // Title
  article.append(new ElementBuilder("h1").text(movie.Title));

  // Edit Button
  article.append(new ElementBuilder("p")
      .append(new ElementBuilder("button").text("Edit")
          .listener("click", () => location.href = "edit.html?imdbID=" + movie.imdbID)));

  // Info Line (Runtime & Year)
  article.append(new ElementBuilder("p").text(
      "Runtime: " + movie.Runtime + " • Year: " + movie.Year
  ));

  // Genres als Kästchen (dein Wunsch-Design)
  if (movie.Genre) {
    const genreContainer = new ElementBuilder("p").with("class", "genre");
    movie.Genre.split(",").forEach(g => {
      genreContainer.append(new ElementBuilder("span").text(g.trim()));
    });
    article.append(genreContainer);
  }

  // Plot, Director, Writer, Actors
  article.append(new ElementBuilder("p").text(movie.Plot));

  article.append(new ElementBuilder("h2").text("Director"));
  article.append(new ListBuilder().items(movie.Director.split(",")));

  article.append(new ElementBuilder("h2").text("Writer"));
  article.append(new ListBuilder().items(movie.Writer.split(",")));

  article.append(new ElementBuilder("h2").text("Actors"));
  article.append(new ListBuilder().items(movie.Actors.split(",")));

  article.appendTo(element);
}

function loadMovies(genre) {
  const mainElement = document.querySelector("main");
  while (mainElement.childElementCount > 0) {
    mainElement.firstChild.remove();
  }

  const url = new URL("/movies", location.href);
  if (genre) {
    url.searchParams.set("genre", genre);
  }

  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        appendMovie(movie, mainElement);
      }
    } else {
      mainElement.append(`Daten konnten nicht geladen werden, Status ${xhr.status}`);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

// --- Task 1.3: Genres beim Laden der Seite erstellen ---
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const listElement = document.querySelector("nav>ul");

    if (xhr.status === 200) {
      const genres = JSON.parse(xhr.responseText);

      // "All" Button
      const allLi = document.createElement("li");
      const allBtn = document.createElement("button");
      allBtn.textContent = "All";
      allBtn.onclick = () => loadMovies();
      allLi.appendChild(allBtn);
      listElement.appendChild(allLi);

      // Einzelne Genre Buttons
      genres.forEach(genre => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = genre;
        btn.onclick = () => loadMovies(genre);
        li.appendChild(btn);
        listElement.appendChild(li);
      });

      // Ersten Button (All) klicken, um Filme initial zu laden
      const firstButton = document.querySelector("nav button");
      if (firstButton) {
        firstButton.click();
      }
    } else {
      document.querySelector("body").append(`Fehler: ${xhr.statusText}`);
    }
  };
  xhr.open("GET", "/genres");
  xhr.send();
};