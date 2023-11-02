import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import postSlice from "./postSlice";
import usersSlice from "./usersSlice";
import {api} from "./api/createApi";
export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice,
    users: usersSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
