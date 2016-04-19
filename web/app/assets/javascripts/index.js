import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import GistView from "./containers/GistView"

import configureStore from "./store"


window.Views = {
  gist: function(element, gist){
    let state = {
      gist: gist,
      browser: { path: "" }
    }

    let store = configureStore(state)

    ReactDOM.render(
      <Provider store={store}>
        <GistView/>
      </Provider>,
      element
    )
  }
}
