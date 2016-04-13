import React from "react"

export default class BrowserToolbar extends React.Component {
  static propTypes = {
    endpoint:     React.PropTypes.string.isRequired,
    path:         React.PropTypes.string.isRequired,
    onPathChange: React.PropTypes.fun
  }

  constructor(props){
    super(props);
    this.state = {path: props.path}
  }

  handlePathChange = (event) => {
    this.setState({path: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onPathChange(this.state.path)
  }

  render(){
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
