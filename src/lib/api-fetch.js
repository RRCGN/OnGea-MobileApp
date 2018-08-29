export default function apiFetch(instanceUrl, { token } = {}) {
  return (path, { body, method = 'GET' } = {}) => {
    return fetch(instanceUrl + path, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Basic YXBpOmFwaQ==`
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
  }
}
