import React from 'react'
import $ from 'jquery'

export default class HtmlClassNameOverrider extends React.Component {
  render() {
    return this.props.children
  }

  componentDidMount() {
    const html = $('html')
    html.removeClass()
    html.addClass(this.props.className)
  }
}
