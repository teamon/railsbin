import { combineReducers } from "redux"

function gistReducer(state = {}, action){
  return state
}

function browserReducer(state = {}, action){
  switch(action.type){
    case "BROWSER_LOAD":
      return Object.assign({}, state, {url: action.url})
  }

  return state
}

export const rootReducer = combineReducers({
  gist:     gistReducer,
  browser:  browserReducer
})
