import React, { Component } from 'react'
import Intro from './Intro'
import Navbar from './Navbar'

class Header extends Component {
  render() {
    const {
      links
    } = this.props

    return (
      <div className="header row justify-content-center">
        <Navbar data={links}/>
        <Intro />
      </div>
    )
  }
}

export default Header
