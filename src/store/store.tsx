import { configureStore} from '@reduxjs/toolkit'
import slice from './slice'

const store = configureStore({
    reducer: {
        cart: slice.reducer
    }
})

export type Rootstate = ReturnType<typeof store.getState>

export type dataDispatch = typeof store.dispatch
export default store
