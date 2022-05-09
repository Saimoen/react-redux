import { configureStore } from '@reduxjs/toolkit';
import picturesReducer from "../feature/pictureSlice"


export default configureStore({
    reducer: {
        pictures: picturesReducer,
    }
})