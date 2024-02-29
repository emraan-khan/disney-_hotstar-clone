import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";
import { userReducer } from "../features/users/userSlice";
// import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    // movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // Add your middleware here
        
      }),
});