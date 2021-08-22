// configureStore.js

import { createStore,applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './RootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["cart","user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const persist =() => {
  const store = createStore(persistedReducer,
    composeWithDevTools(applyMiddleware(logger))
    )
   const persistor = persistStore(store)
  return { store, persistor }
}
export default persist