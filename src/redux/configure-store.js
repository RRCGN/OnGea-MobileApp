import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import agreement from './ducks/agreement'
import auth from './ducks/auth'
import activities from './ducks/activities'
import notifications from './ducks/notifications'
import downloads from './ducks/downloads'
import offlineMaps from './ducks/offline-maps'

export const persistConfig = {
  key: '@OnGeaApp:root',
  storage
}

export default function configureStore() {
  const reducer = combineReducers({
    agreement,
    auth,
    activities,
    downloads,
    offlineMaps,
    notifications
  })

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)

  return { store, persistor }
}
