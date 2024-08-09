import { createSlice } from "@reduxjs/toolkit/react";
import { User } from "@/common/types";

type State = {
  user: User | null;
};

const initialState: State = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export { userSlice };
