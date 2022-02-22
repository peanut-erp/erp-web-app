import React from 'react'
import $ from 'jquery'

export default class BodyClassNameOverrider extends React.Component {
  render() {
    return this.props.children
  }

  componentDidMount() {
    const body = $('body')
    body.removeClass()
    body.addClass(this.props.className)
  }
}
