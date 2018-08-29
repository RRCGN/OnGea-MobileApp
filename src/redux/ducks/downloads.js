const ADD_DOWNLOAD = 'downloads/ADD_DOWNLOAD'
const QUEUE_DOWNLOAD = 'downloads/QUEUE_DOWNLOAD'
const DEQUEUE_DOWNLOAD = 'downloads/DEQUEUE_DOWNLOAD'

const initialState = {
  queue: [],
  files: {}
}

export default function downloads(state = initialState, action = {}) {
  switch (action.type) {
  case ADD_DOWNLOAD:
    return {
      ...state,
      queue: state.queue.filter(dId => dId !== action.download.id),
      files: { ...state.files, [action.download.id]: action.download }
    }

  case QUEUE_DOWNLOAD:
    return {
      ...state,
      queue: [action.download.id, ...state.queue]
    }

  case DEQUEUE_DOWNLOAD: {
    return {
      ...state,
      queue: state.queue.filter(dId => dId !== action.download.id)
    }
  }

  default:
    return state
  }
}

export const addDownload = download => ({
  type: ADD_DOWNLOAD,
  download
})

export const queueDownload = download => ({
  type: QUEUE_DOWNLOAD,
  download
})

export const dequeueDownload = download => ({
  type: DEQUEUE_DOWNLOAD,
  download
})
