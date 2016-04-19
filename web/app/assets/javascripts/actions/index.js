import api from "../api"

export function browserLoad(url){
  return { type: "BROWSER_LOAD", url }
}

export function gistStart(uid){
  return { type: "GIST_START", uid }
}
export function gistStop(uid){
  return { type: "GIST_STOP", uid }
}
export function gistRestart(uid){
  return { type: "GIST_RESTART", uid }
}

export function gistUpdate(data){
  return { type: "GIST_UPDATE", data }
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
