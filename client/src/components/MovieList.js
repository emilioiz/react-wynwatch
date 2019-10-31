import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { withRouter } from "react-router-dom";

const imageURL = "https://image.tmdb.org/t/p/w500";

class MovieList extends React.Component {
  state = {
    movies: [],
    totalPages: 0,
    page: 1,
    width: 0,
    height: 0
  };

  fetchMovies = () => {
    fetch(`/api/movies/1/${this.props.userSelectedGenre}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies, totalPages: data.totalPages });
      });
  };

  getMoreMovies = () => {
    let { page } = this.state;
    page++;
    fetch(`/api/movies/${page}/${this.props.userSelectedGenre}`)
      .then(response => response.json())
      .then(data => {
        const movies = [...this.state.movies, ...data.movies];
        this.setState({ movies, page });
      });
  };

  navigateTo = id => {
    this.props.history.push(`/Description/${id}`)
  }

  render() {
    const { movieListHeight } = this.props;
    return (
      <div
        className="home-movielist"
        ref={element => (this.scrollContainer = element)}
      >
        <InfiniteScroll
          pageStart={this.state.page}
          loadMore={this.getMoreMovies}
          hasMore={this.state.page < this.state.totalPages}
          useWindow={false}
          getScrollParent={() => this.scrollContainer}
        >
          <div className="movielist-posters"
            style={{ height: movieListHeight }}>
            {this.state.movies.reduce((acc, movie) => {
              if (!movie.poster_path) return acc
              const Fragment = (
                <div className="movelist-poster-link" key={movie.id}>
                  <div className="movielist-poster" style={{ position: "relative" }}>
                    <img
                      className="poster"
                      src={imageURL + movie.poster_path}
                      alt={movie.original_title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                      }}
                    />
                    <div
                      className="overlay overlayFade"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        display: "grid",
                        placeItems: "center"
                      }}
                    >
                      <div className="text-overlay">
                        {/* Title */}
                        <div className="text-overlay-movie-title">
                          <p
                            className="movie-title-overlay"
                            align="center"
                            style={{
                              width: "132px",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflow: "hidden"
                            }}
                          >
                            {movie.original_title}
                          </p>
                        </div>
                        {/* Date */}
                        <div className="text-overlay-year" align="center">
                          <p className="year-overlay">{movie.release_date}</p>
                        </div>
                        {/* Stars */}
                        <div
                          className="text-overlay-stars-container"
                          align="center"
                        >
                          <p className="stars-overlay">
                            {movie.vote_average}  / 10
                        </p>
                        </div>
                        {/* Compare Button */}
                        <div
                          className="text-overlay-button-container"
                          align="center"
                        >
                          <div className="button-overlay">
                            <div className="button-a"
                              onClick={() => this.navigateTo(movie.id)}>
                              More Info
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
              acc.push(Fragment);
              return acc;
            }, [])}
          </div>
        </InfiniteScroll>
      </div>
    );
  }

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.userSelectedGenre !== prevProps.userSelectedGenre)
      this.fetchMovies();
  }

}

export default withRouter(MovieList);
