import React, { Component } from 'react'
import { format } from 'date-fns'

import './movies-item.css'

export default class MoviesItem extends Component {
  render() {
    let { title, date, overview, vote, url } = this.props.data

    if (overview.length > 280) {
      overview = overview.slice(0, 280) + '...'
    }

    date = format(new Date(date), 'MMMM dd, yyyy')

    const style = {
      width: `${vote / 0.1}%`,
    }

    let stars = (
      <div className="raiting">
        <div className="raiting__body">
          <div className="rating__active" style={style}>
            <div className="raiting__items"></div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="move">
        <img src={url} alt="" />
        <div className="move__container">
          <p className="title">{title}</p>
          <p className="date">{date}</p>
          <ul className="genre__list">
            <li className="genre__list-item">Action</li>
            <li className="genre__list-item">Drama</li>
          </ul>
          <p className="overview">{overview}</p>
          {stars}
          <div className="raiting__value">{vote}</div>
        </div>
      </div>
    )
  }
}
