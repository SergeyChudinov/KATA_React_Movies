import React, { Component } from 'react'
import debounce from 'lodash/debounce'

import MovieService from '../../services/swapi-services'
import Header from '../header/header'
import { GenreProvider } from '../genre-context'

import './app.css'

export default class App extends Component {
  movieService = new MovieService()

  state = {
    movies: [],
    moviesRated: [],
    title: '',
    loading: true,
    error: false,
    errMessage: null,
    genreList: [],
  }

  componentDidMount() {
    this.updateMovies()
    this.updateGenreList()
  }

  onMoviesLoaded = (movies) => {
    this.setState({
      movies,
      loading: false,
    })
  }

  onGenreListLoaded = (genreList) => {
    this.setState({
      genreList,
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

  updateGenreList = () => {
    this.movieService
      .getAllGenre()
      .then(this.onGenreListLoaded)
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

  addMoviesRated = (movie, id, vote) => {
    const movieHasVote = this.state.moviesRated.find((el) => el.id === id)
    if (!movieHasVote) {
      this.setState((state) => ({
        moviesRated: [...state.moviesRated, movie],
      }))
    } else {
      this.setState((state) => ({
        moviesRated: state.moviesRated.map((item) => {
          if (item.id === id) {
            return { ...item, vote: vote }
          }
          return item
        }),
      }))
    }
  }

  onVoteChange = (vote, id) => {
    const movie = this.state.movies.find((el) => el.id === id)
    movie.vote = vote
    this.addMoviesRated(movie, id, vote)
  }

  render() {
    return (
      <div className="app">
        <GenreProvider value={this.state.genreList.genres}>
          <Header data={this.state} onTitleChange={this.handleInput} onVoteChange={this.onVoteChange} />
        </GenreProvider>
      </div>
    )
  }
}
