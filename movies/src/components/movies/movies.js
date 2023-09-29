import React, { Component } from 'react'

import './movies.css'

import MovieService from '../../services/swapi-services'
import MoviesItem from '../movies-item'

export default class Movies extends Component {
  movieService = new MovieService()

  state = {
    movies: [],
    loading: true,
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

  updateMovies = () => {
    this.movieService.getAllMovies().then(this.onMoviesLoaded)
  }

  render() {
    const elements = this.state.movies.map(({ id, ...props }) => {
      return <MoviesItem key={id} data={props} />
    })
    const { loading } = this.state
    const content = !loading ? elements : null

    console.log(this.state.movies)
    return <div className="moves">{content}</div>
  }
}
