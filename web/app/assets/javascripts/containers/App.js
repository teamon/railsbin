import React from "react"

@connect(
  (state) => state,
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch) } }
)
export default class App extends Component {
  static propTypes = {
    actions:  React.PropTypes.array.isRequired,

    gist:     React.PropTypes.object.isRequired,
    browser:  React.PropTypes.object.isRequired
  }

  render(){
    const { action, gist, browser } = this.props;

    return <GistView
      actions={actions}
      gist={gist}
      browser={browser}
    />
  }
}
