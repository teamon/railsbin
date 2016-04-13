import React from "react"

export default class BrowserFrame extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string.isRequired,
    path:     React.PropTypes.string.isRequired
  }

  render(){
    const url = `http://${this.props.endpoint}/${this.props.path}`
    return (
      <iframe src={url}/>
    )
  }
}
