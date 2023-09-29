import React, { Component } from 'react'

import './movies-item.css'

export default class MoviesItem extends Component {
  render() {
    let { title, date, overview, vote, backdropPath } = this.props.data
    const url = 'https://image.tmdb.org/t/p/w500/' + backdropPath
    if (overview.length > 180) {
      overview = overview.slice(0, 180) + '...'
    }

    let voteAverage = Math.round(vote)
    console.log(voteAverage)
    let stars = []
    for (let i = 1; i < 11; i++) {
      if (i <= voteAverage) {
        stars.push(
          <div className="rating__item color" key={i}>
            ★
          </div>
        )
      } else {
        stars.push(
          <div className="rating__item" key={i}>
            ★
          </div>
        )
      }
    }
    return (
      <div className="move">
        <img src={url} alt="" />
        <div className="move-container">
          <p className="title">{title}</p>
          <p>{date}</p>
          <p>Action</p>
          <p>Drama</p>
          <p>{overview}</p>
          <p>{vote}</p>
          <div className="rating">{stars}</div>
        </div>
      </div>
    )
  }
}
