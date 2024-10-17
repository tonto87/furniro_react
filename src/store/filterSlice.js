import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    layout: "grid",
  },
  reducers: {
    changeLayout: (state, action) => {
      console.log({ state, action });
    },
  },
});

export const { changeLayout } = filterSlice.actions;

export default filterSlice.reducer;
