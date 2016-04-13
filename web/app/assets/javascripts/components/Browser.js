import React from "react"


export default class Browser extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string.isRequired
  }

  constructor(props){
    super(props)

    this.state = { path: "" }
  }

  componentDidMount(){
    this.loadURL()
  }

  handlePathChange = (event) => {
    this.setState({path: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.loadURL()
  }

  loadURL(){
    this.setState({url: `http://${this.props.endpoint}/${this.state.path}`})
  }

  render(){
    return (
      <div>
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

        <iframe src={this.state.url}/>
      </div>
    )
  }
}
