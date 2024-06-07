import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onSubmitFunction: () => {},
};

const submitReducer = createSlice({
  name: "submitReducer",
  initialState,
  reducers: {
    setSubmitModalFunctionAction: (state, action) => {
      state.onSubmitFunction = action.payload;
    },
  },
});

export const { setSubmitModalFunctionAction } = submitReducer.actions;

export default submitReducer.reducer;
