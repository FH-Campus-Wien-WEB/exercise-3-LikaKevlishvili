const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

/* Task 1.2: Add a GET /genres endpoint:
   This endpoint returns a sorted array of all the genres of the movies
   that are currently in the movie model.
*/

/* Task 1.4: Extend the GET /movies endpoint:
   When a query parameter for a specific genre is given, 
   return only movies that have the given genre
 */
app.get('/movies', function (req, res) {
  // Wir holen die Filme über die Funktion aus deinem Model
  let movies = movieModel.getMovies();

  // Task 2.2: Prüfen, ob ein Genre-Filter mitgeschickt wurde
  const selectedGenre = req.query.genre;

  if (selectedGenre) {
    // Filtert die Liste: Nur Filme, die das gewählte Genre enthalten
    movies = movies.filter(m => m.Genre && m.Genre.includes(selectedGenre));
  }

  res.send(movies);
});

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const id = req.params.imdbID;
  const movies = movieModel.getMovies();

  const movie = movies.find(m => m.imdbID === id);

  if (movie) {
    res.send(movie);
  } else {
    res.sendStatus(404);
  }
});


app.put('/movies/:imdbID', function(req, res) {

  const id = req.params.imdbID
  const exists = id in movieModel

  movieModel[req.params.imdbID] = req.body;
  
  if (!exists) {
    res.status(201)
    res.send(req.body)
  } else {
    res.sendStatus(200)
  }
  
})
// Dieser Endpunkt liefert alle einzigartigen Genres deiner 15 Filme
app.get('/genres', (req, res) => {
  const movies = movieModel.getMovies();
  const genreSet = new Set();

  movies.forEach(movie => {
    if (movie.Genre) {
      // Teilt den String "Action, Drama" in einzelne Wörter auf
      movie.Genre.split(',').forEach(g => genreSet.add(g.trim()));
    }
  });

  // Sortiert die Genres alphabetisch
  const sortedGenres = Array.from(genreSet).sort();
  res.json(sortedGenres);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
