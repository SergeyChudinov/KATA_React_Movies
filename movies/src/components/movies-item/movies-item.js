import React, { Component } from 'react'
import { format } from 'date-fns'

import RateComp from '../rateComp'
import { GenreConsumer } from '../genre-context'

import './movies-item.css'
import image from './notFound.png'

export default class MoviesItem extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.data.vote !== nextProps.data.vote
  }

  render() {
    let { title, date, overview, vote, url, genre } = this.props.data

    const stub = url.search(/null/)
    if (stub > -1) {
      url = image
    }

    let color
    if (vote >= 7) color = '#66E900'
    else if (vote >= 5) color = '#E9D100'
    else if (vote >= 3) color = '#E97E00'
    else color = '#E90000'

    vote = vote.toFixed(1).padEnd(2, '0')
    if (vote === '10.0') vote = '10'

    if (overview.length > 280) {
      overview = overview.slice(0, 280) + '...'
    }

    if (title.length > 30) {
      title = title.slice(0, 25) + '...'
    }

    date = format(new Date(date), 'MMMM dd, yyyy')

    function renderLists(lists) {
      if (lists && genre) {
        return genre.map((genreId) => {
          const list = lists.find((el) => el.id === genreId)
          return (
            <li key={list.id} className="genre__list-item">
              {list.name}
            </li>
          )
        })
      }
    }

    return (
      <GenreConsumer>
        {(value) => {
          return (
            <div className="move">
              <img src={url} alt="" />
              <div className="move__container">
                <p className="title">{title}</p>
                <p className="date">{date}</p>
                <ul className="genre__list">{renderLists(value)}</ul>
                <p className="overview">{overview}</p>
                <RateComp onVoteChange={this.props.onVoteChange} vote={vote} />
                <div style={{ borderColor: color }} className="raiting__value">
                  {vote}
                </div>
              </div>
            </div>
          )
        }}
      </GenreConsumer>
    )
  }
}
