import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import * as actions from "../actions"

import EditorPane from "../components/EditorPane"
import RunPane    from "../components/RunPane"

@connect(
  (state) => state,
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch) } }
)
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
