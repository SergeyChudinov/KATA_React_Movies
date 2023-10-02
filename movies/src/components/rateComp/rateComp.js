import React, { Component } from 'react'
import { Rate } from 'antd'

export default class RateComp extends Component {
  render() {
    return <Rate onChange={this.props.onVoteChange} allowHalf value={this.props.vote} count={10} />
  }
}
