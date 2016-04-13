import { createStore } from "redux"
import rootReducer from "../reducers"

export default function configureStore(initial){
  const store = createStore(initial)

  return store
}