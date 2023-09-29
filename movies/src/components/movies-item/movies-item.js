import React, { Component } from 'react'

import './movies-item.css'

export default class MoviesItem extends Component {
  render() {
    let { title, date, overview, vote, url } = this.props.data
    if (overview.length > 180) {
      overview = overview.slice(0, 180) + '...'
    }

    const style = {
      width: `${vote / 0.1}%`,
    }

    let stars = (
      <div className="raiting">
        <div className="raiting__body">
          <div className="rating__active" style={style}>
            <div className="raiting__items">
              <input type="radio" className="raiting__item" value="1" name="raiting" />
              <input type="radio" className="raiting__item" value="2" name="raiting" />
              <input type="radio" className="raiting__item" value="3" name="raiting" />
              <input type="radio" className="raiting__item" value="4" name="raiting" />
              <input type="radio" className="raiting__item" value="5" name="raiting" />
              <input type="radio" className="raiting__item" value="6" name="raiting" />
              <input type="radio" className="raiting__item" value="7" name="raiting" />
              <input type="radio" className="raiting__item" value="8" name="raiting" />
              <input type="radio" className="raiting__item" value="9" name="raiting" />
              <input type="radio" className="raiting__item" value="10" name="raiting" />
            </div>
          </div>
        </div>
        <div className="raiting__value">{vote}</div>
      </div>
    )
    return (
      <div className="move">
        <img src={url} alt="" />
        <div className="move__container">
          <p className="title">{title}</p>
          <p>{date}</p>
          <p>Action</p>
          <p>Drama</p>
          <p>{overview}</p>
          {/* <p>{vote}</p> */}
          {stars}
        </div>
      </div>
    )
  }
}
