import React from 'react'
import MovieList from '../components/MovieList';
import BrowseHelper from '../components/BrowseHelper'
import { withRouter } from 'react-router-dom'

class Browse extends React.Component {

  get backdropSize() {
    return (this.backdrop && this.backdrop.scrollHeight) || 0
  }

  render() {
    const movieListHeight = window.innerHeight - (350);
    return (
      <div className="Browse">
        <>
          <BrowseHelper userSelectedGenre={this.props.match.params.genre} />
        </>
        <MovieList userSelectedGenre={this.props.match.params.genre} movieListHeight={movieListHeight} />
      </div>
    );
  }
}

export default withRouter(Browse)