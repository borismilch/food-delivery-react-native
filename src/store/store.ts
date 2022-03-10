import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const store = configureStore({
  reducer: rootReducer
})

export const createStore = <T extends Object>(preloadedState: T) => configureStore({
  reducer: rootReducer,
  preloadedState
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch