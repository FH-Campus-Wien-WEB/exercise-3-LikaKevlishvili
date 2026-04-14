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

function appendMovie(movie, element) {
  // Wir erstellen den Artikel
  const article = new ElementBuilder("article").id(movie.imdbID);

  // Poster hinzufügen
  article.append(new ElementBuilder("img").with("src", movie.Poster));

  // Titel
  article.append(new ElementBuilder("h1").text(movie.Title));

  // Edit Button
  article.append(new ElementBuilder("p")
      .append(new ElementBuilder("button").text("Edit")
          .listener("click", () => location.href = "edit.html?imdbID=" + movie.imdbID)));

  // Info Zeile: Runtime & Year (kein Date nutzen!)
  article.append(new ElementBuilder("p").text(
      "Runtime: " + movie.Runtime + " • Year: " + movie.Year
  ));

  // Genres (Wir teilen den String bei den Kommas)
  if (movie.Genre) {
    const genreParagraph = new ParagraphBuilder().childClass("genre");
    genreParagraph.items(movie.Genre.split(",").map(g => g.trim()));
    article.append(genreParagraph);
  }

  // Plot
  article.append(new ElementBuilder("p").text(movie.Plot));

  // Listen für Director, Writer, Actors
  article.append(new ElementBuilder("h2").text("Director"));
  article.append(new ListBuilder().items(movie.Director.split(",")));

  article.append(new ElementBuilder("h2").text("Writer"));
  article.append(new ListBuilder().items(movie.Writer.split(",")));

  article.append(new ElementBuilder("h2").text("Actors"));
  article.append(new ListBuilder().items(movie.Actors.split(",")));

  article.appendTo(element);

}

function loadMovies(genre) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const mainElement = document.querySelector("main");

    while (mainElement.childElementCount > 0) {
      mainElement.firstChild.remove()
    }

    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText)
      for (const movie of movies) {
        appendMovie(movie, mainElement)
      }
    } else {
      mainElement.append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  }

  const url = new URL("/movies", location.href)
  /* Task 1.4. Add query parameter to the url if a genre is given */
  if (genre) {
    url.searchParams.set("genre", genre);
  }
  xhr.open("GET", url)
  xhr.send()
}
window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const listElement = document.querySelector("nav>ul");

    if (xhr.status === 200) {
      /* Task 1.3. Add the genre buttons to the listElement and 
         initialize them with a click handler that calls the 
         loadMovies(...) function above. */
      /* Task 1.3. Add the genre buttons to the listElement... */
      const genres = JSON.parse(xhr.responseText);

      const allLi = document.createElement("li");
      const allBtn = document.createElement("button");
      allBtn.textContent = "All";
      allBtn.onclick = () => loadMovies();
      allLi.appendChild(allBtn);
      listElement.appendChild(allLi);

      // 2. Genre Buttons erstellen
      genres.forEach(genre => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = genre;
        btn.onclick = () => loadMovies(genre);
        li.appendChild(btn);
        listElement.appendChild(li);
      });
      const Genres = JSON.parse(xhr.responseText);

      /* When a first button exists, we click it to load all movies. */
      const firstButton = document.querySelector("nav button");
      if (firstButton) {
        firstButton.click();
      }
    } else {
      document.querySelector("body").append(`Daten konnten nicht geladen werden, Status ${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.open("GET", "/genres");
  xhr.send();
};
