import Cookie from 'react-native-cookie'

const REQUEST_TIMEOUT = 15 * 1000 // 15sec

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("timeout"))
    }, ms)
    promise.then(resolve, reject)
  })
}

export default function apiFetch(instanceUrl, { token } = {}) {
  return (path, { body, method = 'GET' } = {}) => {
    // credentials: 'omit' somehow won't work. So let's clear any cookies.
    return Cookie.clear(instanceUrl)
      .then(() => {
        return timeout(REQUEST_TIMEOUT, fetch(instanceUrl + path, {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token ? `Basic ${token}` : undefined
          },
          cache: 'no-cache',
          body: JSON.stringify(body),
          credentials: 'omit'
        }))
      })
      .then(response => {
        if (!response.ok) throw new Error('ApiError')
        return response.json()
      })
  }
}
