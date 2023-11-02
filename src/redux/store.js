import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import {api} from "./api/fakeDataApi";
export default configureStore({
  reducer: {
    counter: counterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
