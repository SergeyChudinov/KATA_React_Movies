import React, { Component } from 'react'

import './movies.css'

import MovieService from '../../services/swapi-services'
import MoviesItem from '../movies-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class Movies extends Component {
  movieService = new MovieService()

  state = {
    movies: [],
    loading: true,
    error: false,
    errMessage: null,
  }
  constructor() {
    super()
    this.updateMovies()
  }

  onMoviesLoaded = (movies) => {
    this.setState({
      movies,
      loading: false,
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

  render() {
    const elements = this.state.movies.map(({ id, ...props }) => {
      return <MoviesItem key={id} data={props} />
    })
    const { loading, error } = this.state
    const errorMessage = error ? <ErrorIndicator message={this.state.errMessage} /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !loading ? elements : null

    return <div className="moves">{errorMessage || spinner || content}</div>
  }
}
