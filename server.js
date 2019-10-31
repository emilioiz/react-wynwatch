
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const axios = require('axios')
const path = require("path")
const app = express()

app.get(`/api/movies/:pageNum/:genreID`, (request, response) => {
  let validGenre = request.params.genreID > 0 ? `with_genres=${request.params.genreID}` : `with_genres=`
  axios.get(`https://api.themoviedb.org/3/discover/movie?&page=${request.params.pageNum}&${validGenre}&api_key=${process.env.TMDB_API_KEY}&sort_by=popularity.desc&language=en-US`)
    .then(tmdbResponse => {
      const movies = tmdbResponse.data.results || []
      const totalPages = tmdbResponse.data.total_pages ? Number(tmdbResponse.data.total_pages) : 0
      response.json({ movies, totalPages })
    })
})

app.get('/api/genres', (request, response) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
    .then(tmdbGenreList => {
      const genres = tmdbGenreList.data.genres
      response.json({ genres })
    })
})

app.get('/api/movie/:movieID', (request, response) => {
  axios.get(`https://api.themoviedb.org/3/movie/${request.params.movieID}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
    .then(tmdbMovieResponse => {
      const movie = tmdbMovieResponse.data || []
      response.json({ movie })
    })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)