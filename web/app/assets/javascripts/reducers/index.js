import { combineReducers } from "redux"

const mock = {
  uid: "xyz123",
  name: "Hello World",
  content: "some code here",
  state: "running",
  endpoint: "localhost:12345"
}

function gistReducer(state = mock, action){
  return state
}


function browserReducer(state = {}, action){
  switch(action.type){
    case "BROWSER_LOAD":
      return Object.assign({}, state, {url: action.url})
  }

  return state
}

export default const rootReducer = combineReducers({
  gist:     gistReducer,
  browser:  browserReducer
})
