import xr from "xr"

const { GET, POST, PATCH } = xr.Methods;

const api = {
  gists: {
    create: (params)      => xr.post("/gists", params),
    update: (uid, params) => xr.patch(`/gists/${uid}`, params)
  }
}

export default api;
