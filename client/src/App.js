import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import './NavBar.css'
import './Movielist.css'
import Home from './pages/Home'
import Description from './pages/Description'
import Browse from './pages/Browse'
import Teapot from './pages/Teapot'
import 'bootstrap/dist/css/bootstrap.min.css'; //Required for carousel
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    compareList: [],
    genreList: []
  }

  addToCompareList = movie => {
    const { compareList } = this.state;
    this.setState({ compareList: [...compareList, movie] })
  }

  fetchGenreList = () => {
    fetch('/api/genres')
      .then(response => response.json())
      .then(data => {
        this.setState({ genreList: data.genres })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar genreList={this.state.genreList} />
        <Switch>
          <Route exact path="/" render={() => <Home addToCompareList={this.addToCompareList} />} />
          <Route exact path="/Description/:id" component={Description} />
          <Route path="/Browse/:genre" component={Browse} />
          <Route path="/Teapot" render={() => <Teapot />} />
        </Switch>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    this.fetchGenreList();
  }

}

export default App