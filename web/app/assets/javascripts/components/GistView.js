import React from "react"

import EditorPane from "./EditorPane"
import RunPane    from "./RunPane"

export default class GistView extends React.Component {
  static propTypes = {
    gist:     React.PropTypes.object.isRequired,
    browser:  React.PropTypes.object.isRequired,

    actions:  React.PropTypes.object.isRequired
  }

  render(){
    const {gist, browser, actions} = this.props

    return <div className="row">
      <div className="column">
        <EditorPane gist={gist} actions={actions}/>
      </div>
      <div className="column">
        <RunPane gist={gist} browser={browser} actions={actions}/>
      </div>
    </div>
  }
}
