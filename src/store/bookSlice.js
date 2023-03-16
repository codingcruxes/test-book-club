import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    list: ["farent 541", "parent trap"],
  },
  reducers: {
    updateList: (state, action) => {
      const newList = new Set([...state.list, ...action.payload]);
      state.list = [...newList];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateList } = bookSlice.actions;

export default bookSlice.reducer;
