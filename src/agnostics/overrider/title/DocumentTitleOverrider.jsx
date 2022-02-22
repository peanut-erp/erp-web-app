import React from 'react'

export default class DocumentTitleOverrider extends React.Component {
  render() {
    return this.props.children
  }

  componentDidMount() {
    document.title = this.props.title
  }
}
