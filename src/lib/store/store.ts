import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user.slice";
import { apiSlice } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
