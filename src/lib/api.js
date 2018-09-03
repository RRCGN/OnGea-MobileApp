import apiFetch from './api-fetch'

export default function api(instanceUrl, { token } = {}) {
  const call = apiFetch(instanceUrl, { token })

  return {
    user: {
      login({ username, password }) {
        return call('/user/login?_format=json', {
          method: 'POST',
          body: {
            name: username,
            pass: password
          }
        })
      }
    },

    activities: {
      get() {
        return call('/api/v2/activities?_format=json')
      }
    },

    uploads: {
      post({ fileName, mimeType, base64 }) {
        return call('/entity/file?_format=hal+json', {
          method: 'POST',
          body: {
            filename: {
              value: fileName
            },
            filemime: {
              value: mimeType
            },
            data: [
              {
                value: base64
              }
            ]
          }
        })
      }
    },

    notifications: {
      get() {
        return call('/api/v2/announcements?_format=json')
      }
    }
  }
}
