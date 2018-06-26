export const postRequestData = (params) => {
  return {
    body: JSON.stringify(params),
    cache: 'no-cache',
    headers: { 'content-type': 'application/json' },
    method: 'POST'
  }
}

export const getRequestData = () => {
  return {
    cache: 'no-cache',
    headers: { 'content-type': 'application/json' },
    method: 'GET'
  }
}

export const parseAndVerify = (response) => {
  console.log(JSON.stringify(response))
  if (response.status === 401) { console.error('Data return 401') }
  return response.json().then( json => {
    return response.ok ? json : Promise.reject(json)
  })
}
