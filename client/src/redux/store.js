import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import  userReducer from './user/userSlice'
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user:userReducer});

const persistCofig = {
    key:'root',
    storage,
    version:1,
}
// save the user info into the localstorage to prevent the situation that losing the info
// when you flush your browser
const persistedReducer = persistReducer(persistCofig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware : (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store);

