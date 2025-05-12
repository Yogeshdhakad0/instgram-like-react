import { configureStore } from "@reduxjs/toolkit";
import data from './dataapi/dataapislice'
const store=configureStore({
    reducer:{
        data
    }
})
export default store