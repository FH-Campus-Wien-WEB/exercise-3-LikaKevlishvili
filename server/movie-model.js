// Wir speichern die Filme in einer Konstante namens 'movies' als Array (eckige Klammern)
const movies = [
  {
    "imdbID": "tt0050083",
    "Title": "Zeugin der Anklage",
    "Year": "1957",
    "Runtime": "116 min",
    "Genre": "Crime, Drama, Mystery",
    "Director": "Billy Wilder",
    "Writer": "Agatha Christie, Billy Wilder",
    "Actors": "Tyrone Power, Marlene Dietrich, Charles Laughton",
    "Plot": "Ein kränklicher Anwalt übernimmt die Verteidigung eines Mannes, der des Mordes an einer reichen Witwe beschuldigt wird.",
    "Poster": "https://image.tmdb.org/t/p/w500/96o6SreKipqD7jS3G309W693UeN.jpg"
  },
  {
    "imdbID": "tt0110413",
    "Title": "Léon – Der Profi",
    "Year": "1994",
    "Runtime": "110 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Luc Besson",
    "Writer": "Luc Besson",
    "Actors": "Jean Reno, Gary Oldman, Natalie Portman",
    "Plot": "Ein Auftragskiller nimmt ein 12-jähriges Mädchen auf, nachdem ihre Familie ermordet wurde.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzY5NDYyMmQtNjQ5OC00NjRjLThmZGMtNmRjYjFjYmJlZGFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0082971",
    "Title": "Jäger des verlorenen Schatzes",
    "Year": "1981",
    "Runtime": "115 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Lawrence Kasdan, George Lucas",
    "Actors": "Harrison Ford, Karen Allen, Paul Freeman",
    "Plot": "Archäologe Indiana Jones sucht die Bundeslade, bevor die Nazis sie finden können.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTE2ODU4NDEtNmE5Ny00ZTE3LWIwYzUtYTgxYmQzYzU5MjE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0102603",
    "Title": "Das Schweigen der Lämmer",
    "Year": "1991",
    "Runtime": "118 min",
    "Genre": "Crime, Drama, Horror",
    "Director": "Jonathan Demme",
    "Writer": "Thomas Harris, Ted Tally",
    "Actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
    "Plot": "Eine FBI-Anwärterin bittet einen inhaftierten Kannibalen um Hilfe bei der Suche nach einem Serienmörder.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0167260",
    "Title": "Der Herr der Ringe: Die Gefährten",
    "Year": "2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "Ein junger Hobbit begibt sich auf eine gefährliche Reise, um den Einen Ring zu zerstören.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0054215",
    "Title": "Psycho",
    "Year": "1960",
    "Runtime": "109 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "Joseph Stefano, Robert Bloch",
    "Actors": "Anthony Perkins, Janet Leigh, Vera Miles",
    "Plot": "Eine Sekretärin flüchtet mit unterschlagenem Geld und landet in einem abgelegenen Motel.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDcyNy00N2RyLWI0ZTYtMTI3MWI3NzYwM2MwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0068646",
    "Title": "Der Pate II",
    "Year": "1974",
    "Runtime": "202 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Francis Ford Coppola, Mario Puzo",
    "Actors": "Al Pacino, Robert De Niro, Robert Duvall",
    "Plot": "Die Fortsetzung zeigt den Aufstieg von Vito Corleone und die Festigung von Michaels Macht.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0110912",
    "Title": "Pulp Fiction",
    "Year": "1994",
    "Runtime": "154 min",
    "Genre": "Crime, Drama",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino, Roger Avary",
    "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
    "Plot": "Die Leben von zwei Auftragskillern, einem Boxer und einem Gangster-Paar verweben sich.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjA4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0060176",
    "Title": "Zwei glorreiche Halunken",
    "Year": "1966",
    "Runtime": "161 min",
    "Genre": "Adventure, Western",
    "Director": "Sergio Leone",
    "Writer": "Luciano Vincenzoni, Sergio Leone",
    "Actors": "Clint Eastwood, Eli Wallach, Lee Van Cleef",
    "Plot": "Drei Männer suchen während des Bürgerkriegs nach einem vergrabenen Goldschatz.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0137523",
    "Title": "Fight Club",
    "Year": "1999",
    "Runtime": "139 min",
    "Genre": "Drama",
    "Director": "David Fincher",
    "Writer": "Chuck Palahniuk, Jim Uhls",
    "Actors": "Brad Pitt, Edward Norton, Meat Loaf",
    "Plot": "Ein schlafloser Büroangestellter gründet einen geheimen Kampfclub.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0109830",
    "Title": "Forrest Gump",
    "Year": "1994",
    "Runtime": "142 min",
    "Genre": "Drama, Romance",
    "Director": "Robert Zemeckis",
    "Writer": "Winston Groom, Eric Roth",
    "Actors": "Tom Hanks, Robin Wright, Gary Sinise",
    "Plot": "Ein Mann mit geringem IQ erlebt bedeutende historische Ereignisse.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Y2I1LTgzY2MtZDgxMTU2N2U1NjZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0133093",
    "Title": "Matrix",
    "Year": "1999",
    "Runtime": "136 min",
    "Genre": "Action, Sci-Fi",
    "Director": "Lana Wachowski, Lilly Wachowski",
    "Writer": "Lilly Wachowski, Lana Wachowski",
    "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    "Plot": "Ein Hacker entdeckt die wahre Natur der Realität und schließt sich einer Rebellion an.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0032553",
    "Title": "Der große Diktator",
    "Year": "1940",
    "Runtime": "125 min",
    "Genre": "Comedy, Drama, War",
    "Director": "Charles Chaplin",
    "Writer": "Charles Chaplin",
    "Actors": "Charles Chaplin, Paulette Goddard, Jack Oakie",
    "Plot": "Ein jüdischer Friseur wird mit einem tyrannischen Diktator verwechselt.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYy00NWJiLTgwM2ItZDE2MDMwMzY0MWJjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0056119",
    "Title": "Harakiri",
    "Year": "1962",
    "Runtime": "133 min",
    "Genre": "Action, Drama, Mystery",
    "Director": "Masaki Kobayashi",
    "Writer": "Yasuhiko Takiguchi, Shinobu Hashimoto",
    "Actors": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita",
    "Plot": "Ein alternder Samurai bittet darum, rituellen Selbstmord auf dem Anwesen eines Clans zu begehen.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtY2VjZDZkN2EwMmY0XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
  },
  {
    "imdbID": "tt0057443",
    "Title": "Dr. Seltsam oder: Wie ich lernte, die Bombe zu lieben",
    "Year": "1964",
    "Runtime": "95 min",
    "Genre": "Comedy, War",
    "Director": "Stanley Kubrick",
    "Writer": "Stanley Kubrick, Terry Southern",
    "Actors": "Peter Sellers, George C. Scott, Sterling Hayden",
    "Plot": "Ein wahnsinniger General löst einen nuklearen Angriff aus, während Politiker versuchen, ihn zu stoppen.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  }
];

function getMovies() {
  return movies;
}
// Wir exportieren die Funktion, damit andere Dateien darauf zugreifen können
module.exports = {
  getMovies
};