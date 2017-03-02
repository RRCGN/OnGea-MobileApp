jest.mock('AsyncStorage', () => {
  const store = {}

  return {

    setItem: jest.fn((key, val) => {
      store[key] = val
    }),

    getItem: jest.fn((key) => {
      return store[key]
    }),

    removeItem: jest.fn((key) => {
      delete store[key]
    })

  }
})
