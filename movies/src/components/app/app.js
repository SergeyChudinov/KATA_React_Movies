import React, { Component } from 'react'
import debounce from 'lodash/debounce'

import './app.css'

import MovieService from '../../services/swapi-services'
import Search from '../search'
import Movies from '../movies'
import Header from '../header/header'

export default class App extends Component {
  movieService = new MovieService()

  state = {
    movies: [],
    title: '',
    loading: true,
    error: false,
    errMessage: null,
  }

  componentDidMount() {
    this.updateMovies()
  }

  onMoviesLoaded = (movies) => {
    this.setState({
      movies,
      loading: false,
    })
  }

  onLoading() {
    this.setState({
      loading: true,
    })
  }

  onError = (e) => {
    this.setState({
      loading: false,
      error: true,
      errMessage: e,
    })
  }

  updateMovies = () => {
    this.movieService
      .getAllMovies()
      .then(this.onMoviesLoaded)
      .catch((e) => this.onError(e.message))
  }

  updateSearchMovies = (title) => {
    this.movieService
      .searchAllMovies(title)
      .then(this.onMoviesLoaded)
      .catch((e) => this.onError(e.message))
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    })
    this.updateSearchMovies(e.target.value)
  }

  handleInput = (e) => {
    this.onLoading()
    debounce((e) => {
      this.onTitleChange(e)
    }, 1000)(e)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Search onTitleChange={this.handleInput} />
        <Movies data={this.state} />
      </div>
    )
  }
}
