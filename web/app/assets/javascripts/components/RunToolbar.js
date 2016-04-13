import React from "react"

import Button from "./Button"

export default class RunToolbar extends React.Component {
  static propTypes = {
    state: React.PropTypes.string.isRequired
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
    return <Button label="Start" onClick={this.handleStart}/>
  }

  renderButtonStop(){
    return <Button label="Stop" onClick={this.handleStop}/>
  }

  renderButtonRestart(){
    return <Button label="Restart" onClick={this.handleRestart}/>
  }
}
