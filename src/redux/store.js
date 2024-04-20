import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Slices';
import storage from 'redux-persist/lib/storage';
import {persistStore , persistReducer}  from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage
}

const  persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore(
    {
        reducer: persistedReducer,
    }
)
export const persistor = persistStore(store)

// export default store