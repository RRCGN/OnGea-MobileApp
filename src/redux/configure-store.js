import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import agreement from './ducks/agreement'
import auth from './ducks/auth'
import activities from './ducks/activities'
import downloads from './ducks/downloads'

export const persistConfig = {
  key: '@OnGeaApp:root',
  storage
}

export default function configureStore() {
  const reducer = combineReducers({
    agreement,
    auth,
    activities,
    downloads
  })

  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)

  return { store, persistor }
}
