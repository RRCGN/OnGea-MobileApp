const SET_MAP_DOWNLOADING = 'offline-maps/SET_MAP_DOWNLOADING'
const SET_MAP_DOWNLOADED = 'offline-maps/SET_MAP_DOWNLOADED'
const SET_MAP_DOWNLOAD_PROGRESS = 'offline-maps/SET_MAP_DOWNLOAD_PROGRESS'

const initialState = {
  downloading: [],
  downloaded: []
}

export default function offlineMaps(state = initialState, action = {}) {
  switch (action.type) {
  case SET_MAP_DOWNLOADING:
    return {
      ...state,
      downloading: [action.id, ...state.downloading]
    }

  case SET_MAP_DOWNLOADED:
    return {
      ...state,
      downloaded: [action.id, ...state.downloaded],
      downloading: state.downloading.filter(id => id !== action.id)
    }

  default:
    return state
  }
}

export const getMapId = location => {
  return `location:${location.latitude}:${location.longitude}`
}

export const setMapDownloading = location => ({
  type: SET_MAP_DOWNLOADING,
  id: getMapId(location)
})

export const setMapDownloaded = location => ({
  type: SET_MAP_DOWNLOADED,
  id: getMapId(location)
})
