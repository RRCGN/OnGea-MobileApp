import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { middleware as reduxPackMiddleware } from 'redux-pack'

import * as reducers from './reducers'
const reducer = combineReducers(reducers)


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key: '@OnGeaApp:root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer,
  applyMiddleware(thunk, reduxPackMiddleware)
)
const persistor = persistStore(store)
export default {
  store,
  persistor
}
