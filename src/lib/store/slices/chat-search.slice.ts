import { createSlice } from "@reduxjs/toolkit";

type State = {
  name: string | null;
};

const initialState: State = {
  name: null,
};

const chatSearchSlice = createSlice({
  name: "chatSearch",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    resetName: (state) => {
      state.name = null;
    },
  },
});

export const { setName, resetName } = chatSearchSlice.actions;
export { chatSearchSlice };
