import Cookie from 'react-native-cookie'

export default function apiFetch(instanceUrl, { token } = {}) {
  return (path, { body, method = 'GET' } = {}) => {
    // credentials: 'omit' somehow won't work. So let's clear any cookies.
    return Cookie.clear(instanceUrl)
      .then(() => {
        return fetch(instanceUrl + path, {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token ? `Basic ${token}` : undefined
          },
          cache: 'no-cache',
          body: JSON.stringify(body),
          credentials: 'omit'
        })
      })
      .then(response => {
        if (!response.ok) throw new Error('ApiError')
        return response.json()
      })
  }
}
