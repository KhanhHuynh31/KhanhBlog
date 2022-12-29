import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './reducers/UserReducer'
import { ModalReducer } from './reducers/ModalReducer'
import { PostReducer } from './reducers/PostReducer'
import { LoadingReducer } from './reducers/LoadingReducer'

export const store = configureStore({
    reducer: {
        UserReducer,
        ModalReducer,
        PostReducer,
        LoadingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})


