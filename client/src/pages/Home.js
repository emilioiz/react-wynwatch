import React, { Component } from "react"
import MovieList from '../components/MovieList'
import MainCarousel from '../components/MainCarousel'

class Home extends Component {

  get backdropSize() {
    return (this.backdrop && this.backdrop.scrollHeight) || 0
  }

  render() {
    const movieListHeight = window.innerHeight - (485);
    return (
      <div className="home" >
        <MainCarousel />
        <MovieList movieListHeight={movieListHeight} />
      </div >
    )
  }
}


export default Home;