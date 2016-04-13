import React from "react"

import BrowserToolbar from "./BrowserToolbar"
import BrowserFrame from "./BrowserFrame"

export default class Browser extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string.isRequired
  }

  constructor(props){
    super(props)

    this.state = {path: ""}
  }

  handlePathChange = (path) => {
    this.setState({path: path})
  }

  render(){
    const url = `http://${this.props.endpoint}/${this.state.path}`

    return (
      <div>
        <BrowserToolbar
          endpoint={this.props.endpoint}
          path={this.state.path}
          onPathChange={this.handlePathChange}/>
        <BrowserFrame url={url}/>
      </div>
    )
  }
}
