import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "../features/users/userSlice";

 const store= configureStore({
    reducer:{userReducer},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store;