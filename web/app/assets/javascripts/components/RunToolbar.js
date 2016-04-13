import React from "react"

import Button from "./Button"

export default class RunToolbar extends React.Component {
  static propTypes = {
    state: React.PropTypes.string.isRequired,

    gistStart:    React.PropTypes.func.isRequired,
    gistStop:     React.PropTypes.func.isRequired,
    gistRestart:  React.PropTypes.func.isRequired
  }

  render(){
    switch(this.props.state){
      case "running":
        return <div>
          {this.renderButtonStop()}
          {" "}
          {this.renderButtonRestart()}
        </div>
        break;

      default:
        return <div>
          {this.renderButtonStart()}
        </div>
        break;
    }
  }

  renderButtonStart(){
    return <Button label="Start" onClick={this.props.gistStart}/>
  }

  renderButtonStop(){
    return <Button label="Stop" onClick={this.props.gistStop}/>
  }

  renderButtonRestart(){
    return <Button label="Restart" onClick={this.props.gistRestart}/>
  }
}
