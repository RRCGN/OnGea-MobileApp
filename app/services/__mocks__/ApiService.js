export default class ApiService {
  static async auth(username, password) {
    if (username === 'foo' && password === 'bar') {
      return Promise.resolve({ ok: true, token: 'foobar' })
    } else {
      return Promise.resolve({ ok: false })
    }
  }

  static async all() {
    return Promise.resolve({ ok: true, data: { foo: 'bar' } })
  }
}
