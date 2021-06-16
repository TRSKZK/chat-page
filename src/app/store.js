import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../features/MessagesSlice'

export default configureStore({
    reducer: {
        messages: messageReducer,
    }
})