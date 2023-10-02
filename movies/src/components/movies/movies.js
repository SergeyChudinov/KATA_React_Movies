import React, { Component } from 'react'

import './movies.css'

import MoviesItem from '../movies-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class Movies extends Component {
  render() {
    const { movies, loading, error, errMessage } = this.props.data

    const elements = movies.map(({ id, ...props }) => {
      return <MoviesItem key={id} data={props} onVoteChange={(vote) => this.props.onVoteChange(vote, id)} />
    })

    const errorMessage = error ? <ErrorIndicator message={errMessage} /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !loading ? elements : null

    if (!movies.length && !loading && !errMessage) {
      return <div>По вашему запросу нет фильмов</div>
    }

    if (spinner) {
      return <div className="spinner">{spinner}</div>
    }

    return <div className="moves">{errorMessage || content}</div>
  }
}
