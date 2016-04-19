import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./reducers"

function locationMiddleware({dispatch, getState}){
  return next => action => {
    if(action.type == "LOCATION_CHANGE"){
      window.history.pushState({}, "", action.location);
    }

    return next(action);
  }
}

export default function configureStore(initial = {}){
  return createStore(
    rootReducer,
    initial,
    compose(
      applyMiddleware(
        thunk,
        locationMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
