import xr from "xr"

const { GET, POST, PATCH } = xr.Methods;

const api = {
  gists: {
    create: (params)      => xr.post("/gists", params),
    update: (uid, params) => xr.patch(`/gists/${uid}`, params),

    start: (uid)    => xr.post(`/gists/${uid}/start`),
    stop: (uid)     => xr.post(`/gists/${uid}/stop`),
    restart: (uid)  => xr.post(`/gists/${uid}/restart`)
  }
}

export default api;
