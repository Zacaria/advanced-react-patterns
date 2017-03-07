import React, { Component } from 'react'

export const SMALL = 1
export const MEDIUM = 2
export const LARGE = 3

const withWidth = (dimensions) => (MyComponent) => {

  const {largeWidth = 1200, mediumWidth = 1105, resizeInterval = 2} = dimensions || {};

  return class WithWidth extends Component {
    constructor() {
      super()
      this.state = { width: this.windowWidth() }
      this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
      if (window) {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
      }
    }

    componentWillUnmount() {
      if (window) window.removeEventListener('resize', this.handleResize)
    }

    handleResize() {
      let width = this.windowWidth()
      if (width !== this.state.width) this.setState({ width })
    }

    windowWidth() {
      let innerWidth = 0
      let width
      if (window) innerWidth = window.innerWidth

      if (innerWidth >= largeWidth) {
        width = LARGE
      } else if (innerWidth >= mediumWidth) {
        width = MEDIUM
      } else { // innerWidth < 768
        width = SMALL
      }

      return width
    }

    render() {
      return (
        <MyComponent
          { ...this.props }
          width={ this.state.width }
        />
      )
    }
  }
}

export default withWidth
