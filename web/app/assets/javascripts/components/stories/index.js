import React from "react"
import { storiesOf, action, linkTo } from "@kadira/storybook"

import Button         from "../Button"
import BrowserFrame   from "../BrowserFrame"
import BrowserToolbar from "../BrowserToolbar"
import RunToolbar     from "../RunToolbar"
import RunPane        from "../RunPane"
import GistView       from "../GistView"
import Editor         from "../Editor"
import EditorToolbar  from "../EditorToolbar"
import EditorPane     from "../EditorPane"

storiesOf("Button", module)
  .add("default", () =>
    <div className="container">
      <Button label="Click me" onClick={action('click the button')}/>
      {" "}
      <Button label="Click me" className="button button-outline" onClick={action('click the button')}/>
      {" "}
      <Button label="Click me" className="button button-clear" onClick={action('click the button')}/>
    </div>
  )

storiesOf("BrowserFrame", module)
  .add("default", () =>
    <div className="container">
      <BrowserFrame endpoint={"httpbin.org"} path="ip"/>
    </div>
  )

storiesOf("BrowserToolbar", module)
  .add("default", () =>
    <div className="container">
      <BrowserToolbar
        endpoint={"httpbin.org"}
        path="ip"
        onPathChange={action("browserLoad")}/>
    </div>
  )

storiesOf("RunToolbar", module)
  .add("initial", () => setupRunToolbar("new"))
  .add("running", () => setupRunToolbar("running"))

function setupRunToolbar(state){
  return <div className="container">
    <RunToolbar state={state}
      gistStart={action("gistStart")}
      gistStop={action("gistStop")}
      gistRestart={action("gistRestart")}/>
  </div>
}

storiesOf("RunPane", module)
  .add("initial", () => setupRunPane("new"))
  .add("running", () => setupRunPane("running"))

function setupRunPane(state){
  const gist    = makeGist({state})
  const browser = makeBrowser()
  const actions = makeActions()

  return <div className="container">
    <RunPane gist={gist} browser={browser} actions={actions}/>
  </div>
}

storiesOf("GistView", module)
  .add("initial", () => setupGistView("new"))

function setupGistView(state){
  const gist    = makeGist({state})
  const browser = makeBrowser()
  const actions = makeActions()

  return <div className="container">
    <GistView gist={gist} browser={browser} actions={actions}/>
  </div>
}

storiesOf("Editor", module)
  .add("default", () =>
    <div className="container">
      <Editor content="Hello world"/>
    </div>
  )

storiesOf("EditorToolbar", module)
  .add("default", () =>
    <div className="container">
      <EditorToolbar gistUpdate={action("gistUpdate")}/>
    </div>
  )

storiesOf("EditorPane", module)
  .add("default", () => setupEditorPane())

function setupEditorPane(state){
  const gist    = makeGist({state})
  const actions = makeActions()

  return <div className="container">
    <EditorPane gist={gist} actions={actions}/>
  </div>
}

function makeGist(attrs = {}){
  return Object.assign({}, {
    uid: "xyz123",
    name: "Hello World",
    content: "some code here",
    state: "new",
    endpoint: "httpbin.org:80"
  }, attrs)
}

function makeBrowser(attrs = {}){
  return Object.assign({}, {
    path: "ip"
  }, attrs)
}

function makeActions(){
  return {
    gistStart:    action("gistStart"),
    gistStop:     action("gistStop"),
    gistRestart:  action("gistRestart"),
    gistUpdate:   action("gistUpdate"),
    browserLoad:  action("browserLoad")
  }
}

