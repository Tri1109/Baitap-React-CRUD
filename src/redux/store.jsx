import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./reducers/storeReducer";
import submitReducer from "./reducers/submitReducer";
import messageReducer from "./reducers/messageReducer";
export const store = configureStore({
  reducer: {
    storeReducer,
    submitReducer,
    messageReducer,
  },
});
