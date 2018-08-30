import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nProvider } from '@lingui/react'

import { i18n } from './i18n'
import configureStore from '../src/redux/configure-store'
import RootView from './views/Root'

const { store, persistor } = configureStore()

class App extends React.PureComponent {
  render() {
    return (
      <I18nProvider i18n={i18n}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootView />
          </PersistGate>
        </Provider>
      </I18nProvider>
    )
  }
}

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted(...) is deprecated'
]

export default App
