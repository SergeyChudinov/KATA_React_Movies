import React, { Component } from 'react'
import { Tabs } from 'antd'

import Search from '../search'
import Movies from '../movies'

export default class Header extends Component {
  tabs = ['Search', 'Rated']

  renderFn = (i) => {
    const {
      data: { movies, moviesRated, loading, error },
      onTitleChange,
      onVoteChange,
    } = this.props
    if (i === 0) {
      return (
        <>
          <Search onTitleChange={onTitleChange} />
          <Movies data={{ movies, loading, error }} onVoteChange={onVoteChange} />
        </>
      )
    } else {
      return (
        <>
          <Movies data={{ movies: moviesRated, loading, error }} onVoteChange={onVoteChange} />
        </>
      )
    }
  }

  render() {
    return (
      <Tabs
        defaultActiveKey="1"
        centered
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1)
          return {
            label: this.tabs[i],
            key: id,
            children: this.renderFn(i),
          }
        })}
      />
    )
  }
}
