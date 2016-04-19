import React from "react"

import RunToolbar       from "./RunToolbar"
import BrowserToolbar   from "./BrowserToolbar"
import BrowserFrame     from "./BrowserFrame"

export default class RunPane extends React.Component {
  static propTypes = {
    gist:     React.PropTypes.object.isRequired,
    browser:  React.PropTypes.object.isRequired,

    actions:  React.PropTypes.object.isRequired
  }
  render(){
    const {gist, browser, actions} = this.props

    if(gist.state != "running"){
      return <div>{this.renderRunToolbar()}</div>
    } else {
      return <div>
        {this.renderRunToolbar()}
        <BrowserToolbar
          endpoint={gist.endpoint}
          path={browser.path}
          onPathChange={actions.browserLoad}/>
        <BrowserFrame
          endpoint={gist.endpoint}
          path={browser.path}/>
      </div>
    }
  }

  renderRunToolbar(){
    const {gist, actions} = this.props

    const gistStart   = () => actions.gistStart(gist.uid)
    const gistStop    = () => actions.gistStop(gist.uid)
    const gistRestart = () => actions.gistRestart(gist.uid)

    return <RunToolbar
      state={gist.state}
      gistStart={gistStart}
      gistStop={gistStop}
      gistRestart={gistRestart}
    />
  }
}
