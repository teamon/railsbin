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

    if(gist.state === "new"){
      return <div>
        <RunToolbar
          state={gist.state}
          {...actions}/>
      </div>
    } else {
      return <div>
        <RunToolbar
          state={gist.state}
          {...actions}/>
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
}
