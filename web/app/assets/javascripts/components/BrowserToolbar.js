import React from "react"

import Button from "./Button"

export default class BrowserToolbar extends React.Component {
  static propTypes = {
    endpoint:     React.PropTypes.string.isRequired,
    path:         React.PropTypes.string.isRequired,
    onPathChange: React.PropTypes.fun
  }

  constructor(props){
    super(props)

    this.state = {path: this.props.path}
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    this.props.onPathChange(this.state.path)
  }

  handlePathChange = (event) => {
    this.setState({path: event.target.value})
  }

  render(){
    console.log("render " + this.state.path)
    return (
      <form onSubmit={this.handleFormSubmit} className="row">
        <div className="column column-30">
          <label>http://{this.props.endpoint}/</label>
        </div>
        <div className="column column-60">
          <input
            type="text"
            placeholder="some-path"
            value={this.state.path}
            onChange={this.handlePathChange}/>
        </div>
        <div className="column column-10">
          <input type="submit" value="Go"/>
        </div>
      </form>
    )
  }
}
