import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';

export default configureStore({
    reducer: {
        // Add your reducers here
        counter: counterReducer
    },
});