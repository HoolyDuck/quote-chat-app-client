import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user.slice";

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
