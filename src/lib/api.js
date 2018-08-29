import apiFetch from './api-fetch'

export default function api(instanceUrl, { token } = {}) {
  const call = apiFetch(instanceUrl, { token })

  return {
    user: {
      login({ username, password }) {
        return call('/user/login?_format=json', {
          method: 'POST',
          body: {
            user: username,
            pass: password
          }
        })
      }
    },

    activities: {
      get() {
        return call('/api/v2/activities?_format=json')
      }
    }
  }
}
