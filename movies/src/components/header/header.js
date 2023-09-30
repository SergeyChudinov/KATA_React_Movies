import React, { Component } from 'react'
import { Tabs } from 'antd'

export default class Header extends Component {
  tabs = ['Search', 'Rated']
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
          }
        })}
      />
    )
  }
}
