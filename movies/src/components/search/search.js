import React, { Component } from 'react'

import './search.css'

export default class Search extends Component {
  render() {
    return <input className="search" type="text" onChange={this.props.onTitleChange} placeholder="Type to search..." />
  }
}
