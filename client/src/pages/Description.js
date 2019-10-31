import React from 'react'
import { Card } from 'react-bootstrap'
import MovieList from '../components/MovieList'
import { withRouter } from 'react-router-dom'

const imageURL = "https://image.tmdb.org/t/p/w500";

class Description extends React.Component {

  state = {
    movie: []
  }

  get backdropSize() {
    return (this.backdrop && this.backdrop.scrollHeight) || 0
  }


  fetchMovie = () => {
    fetch(`/api/movie/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movie: data.movie });
      });
  };

  render() {
    const movieListHeight = window.innerHeight - (165 + this.backdropSize);
    return (
      <div className="Description"
        style={{
          position: "relative"
        }}
      >
        <img
          ref={el => this.backdrop = el}
          id="movie-desc-backdrop"
          src={imageURL + this.state.movie.backdrop_path}
          alt={this.state.movie.original_title}
        />
        <div className="description-page-div1">
          <img id="movie-desc-poster" src={imageURL + this.state.movie.poster_path} alt={this.state.movie.original_title} />
        </div>
        <div className="description-page-div2">

          <Card bg="dark" text="white" style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>
                {this.state.movie.original_title}
              </Card.Title>
              <Card.Text>
                Viewer Score: {this.state.movie.vote_average}
              </Card.Text>
              <Card.Text>
                {this.state.movie.overview}
              </Card.Text>
              <Card.Text>
                Original Release Date: {this.state.movie.release_date}
              </Card.Text>
              <Card.Text>
                <div className='service-logos'>
                  <img src="/assets/netflix.svg" alt="netflix logo" id='netflix-logo' />
                  <img src="/assets/hbo.svg" alt="hbo logo" id='hbo-logo' />
                  <img src="/assets/hulu" alt="hulu logo" id='hulu-logo' />
                  <img src="/assets/prime.svg" alt="prime logo" id='prime-logo' />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="description-page-div3">
          <h3>Suggested Content</h3>
          <MovieList movieListHeight={movieListHeight} />
        </div>
      </div >);
  }
  componentDidMount() {
    this.fetchMovie();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id)
      this.fetchMovie();
  }

}
export default withRouter(Description)