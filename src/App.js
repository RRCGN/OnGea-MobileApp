import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import redux from '../src/redux'

import RootView from './views/Root'


const App = () => (
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <RootView />
    </PersistGate>
  </Provider>
)


console.ignoredYellowBox = [
  'Remote debugger',
  // 'Behaviour of screenProps has changed',
  'Warning: isMounted(...) is deprecated'
]

export default App
