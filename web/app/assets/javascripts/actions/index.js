import api from "../api"

export function browserLoad(url){
  return { type: "BROWSER_LOAD", url }
}

function gistLifecycle(uid, event){
  return dispatch => {
    console.log(uid)

    return api.gists[event](uid).then(({data}) => {
      dispatch(gistStateUpdate(data))
    })
  }
}

export function gistStart(uid){
  return gistLifecycle(uid, "start");
}
export function gistStop(uid){
  return gistLifecycle(uid, "stop");
}
export function gistRestart(uid){
  return gistLifecycle(uid, "restart");
}

export function gistUpdate(data){
  return { type: "GIST_UPDATE", data }
}

export function gistStateUpdate(data){
  return { type: "GIST_STATE_UPDATE", data }
}

export function locationChange(location){
  return { type: "LOCATION_CHANGE", location };
}

export function gistContentChange(uid, content){
  return dispatch => {
    let call = uid ?
      api.gists.update(uid, {content}) :
      api.gists.create({content})

    return call.then(({data}) => {
      if(!uid) dispatch(locationChange(`/gists/${data.uid}`))

      dispatch(gistUpdate(data))
    })
  }
}
