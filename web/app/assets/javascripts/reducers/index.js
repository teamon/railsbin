import { combineReducers } from "redux"

function gistReducer(state = {}, action){
  switch(action.type){
    case "GIST_UPDATE":
      return {
        ...state,
        ...action.data
      }
  }
  return state
}

function browserReducer(state = {}, action){
  switch(action.type){
    case "BROWSER_LOAD":
      return {
        ...state,
        url: action.url
      }
  }

  return state
}

export const rootReducer = combineReducers({
  gist:     gistReducer,
  browser:  browserReducer
})
