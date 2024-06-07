import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  contentMessageUserAdd,
  setMessageAction,
  statusMessage,
} from "./messageReducer";
const initialState = {
  productList: [],
};

const storeReducer = createSlice({
  name: "storeReducer",
  initialState,
  reducers: {
    getStoreListAction: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { getStoreListAction } = storeReducer.actions;

export default storeReducer.reducer;

// Lấy danh sách sản phẩm
export const getProductListActionApi = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Store/getAll"
    );
    const actionPayload = getStoreListAction(res.data.content);
    dispatch(actionPayload);
  };
};

// Thêm sản phẩm
export const addProductActionApi = (product) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://apistore.cybersoft.edu.vn/api/Store",
        product
      );
      const actionThunk = getProductListActionApi();
      dispatch(actionThunk);
      const actionNotify = {
        type: statusMessage.success,
        content: contentMessageUserAdd.addUserSuccess,
      };
      const messageAction = setMessageAction(actionNotify);
      dispatch(messageAction);
    } catch (err) {
      const actionNotify = {
        type: statusMessage.error,
        content: contentMessageUserAdd.addUserFail,
      };
      const messageAction = setMessageAction(actionNotify);
      dispatch(messageAction);
    }
  };
};

// Xóa sản phẩm
export const deleteProductActionApi = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        "https://apistore.cybersoft.edu.vn/api/Store",
        id
      );
      console.log(response);
      const actionThunk = getProductListActionApi();
      dispatch(actionThunk);
    } catch (err) {
      console.log("err", err);
    }
  };
};
