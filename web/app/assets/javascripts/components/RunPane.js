import React from "react"

import RunToolbar from "./RunToolbar"
import Browser    from "./Browser"

export default class RunPane extends React.Component {
  render(){
    const {state, endpoint} = this.props

    return <div>
      <RunToolbar state={state}/>
      <Browser endpoint={endpoint}/>
    </div>
  }
}
