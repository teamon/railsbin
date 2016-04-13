import React from "react"

import EditorToolbar  from "./EditorToolbar"
import Editor         from "./Editor"

export default class EditorPane extends React.Component {
  static propTypes = {
    gist:     React.PropTypes.object.isRequired,

    actions:  React.PropTypes.object.isRequired
  }
  render(){
    const {gist, actions} = this.props

    return <div>
      <EditorToolbar gistUpdate={actions.gistUpdate}/>
      <Editor content={gist.content}/>
    </div>
  }
}
