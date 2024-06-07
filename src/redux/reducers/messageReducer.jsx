import { createSlice } from "@reduxjs/toolkit";

export const statusMessage = {
  success: "success",
  error: "error",
  warning: "warning",
};
export const contentMessageUserAdd = {
  addUserSuccess: "Create user successfully",
  addUserFail: "Create user failure",
};

const initialState = {
  message: {
    type: "success",
    content: "success",
  },
};
const messageReducer = createSlice({
  name: "messageReducer",
  initialState,
  reducers: {
    setMessageAction: (state, action) => {
      // console.log(action)
      state.message = action.payload;
    },
  },
});
export const { setMessageAction } = messageReducer.actions;
export default messageReducer.reducer;
