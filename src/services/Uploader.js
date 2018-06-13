import Config from 'react-native-config'
class Uploader {

  static postData (data) {
    return {
      body: JSON.stringify(data),
      cache: 'no-cache',
      headers: { 'content-type': 'application/json' },
      method: 'POST'
    }
  }

  static getRequestData () {
    return {
      cache: 'no-cache',
      headers: { 'content-type': 'application/json' },
      method: 'GET'
    }
  }

  static async uploadFile (data) {
    console.log('uploading....', data)
    return await fetch(Config.LOGIN_URI)
      // .then((response) => response.json())
      .then(() => {
        return { ok: true}
        return { ok: false}
      })
  }
}


export default Uploader
