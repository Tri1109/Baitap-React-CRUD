import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
  product: {
    id: "",
    name: "",
    alias: "",
    latitude: "",
    longtitude: "",
    description: "",
    image: "",
  },
};

const storeReducer = createSlice({
  name: "storeReducer",
  initialState,
  reducers: {
    getStoreListAction: (state, action) => {
      state.productList = action.payload;
    },
    updateProductAction: (state, action) => {
      state.product.id = action.payload.id;
      state.product.name = action.payload.name;
      state.product.alias = action.payload.alias;
      state.product.latitude = action.payload.latitude;
      state.product.longtitude = action.payload.longtitude;
      state.product.description = action.payload.description;
      state.product.image = action.payload.image;
    },
  },
});

export const { getStoreListAction, updateProductAction } = storeReducer.actions;

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
    } catch (err) {
      console.log(err);
    }
  };
};

// Xóa sản phẩm
export const deleteProductActionApi = (id) => {
  return async (dispatch) => {
    const arrID = [id];
    try {
      console.log("arrID", arrID);
      const response = await axios.delete(
        "https://apistore.cybersoft.edu.vn/api/Store",
        { data: arrID }
      );
      console.log(response);
      const actionThunk = getProductListActionApi();
      dispatch(actionThunk);
    } catch (err) {
      console.log("err", err);
    }
  };
};

// Get sản phẩm theo id
export const getProductIdActionApi = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://apistore.cybersoft.edu.vn/api/Store/getbyid?id=${id}`
      );
      const data = res.data.content;
      dispatch(updateProductAction(data));
    } catch (err) {
      console.log("err", err);
    }
  };
};

// Update sản phẩm
export const updateProdActionApi = (product) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `https://apistore.cybersoft.edu.vn/api/Store?id=${product.id}`,
        product
      );
      const actionThunk = getProductListActionApi();
      dispatch(actionThunk);
    } catch (err) {
      console.log(err);
    }
  };
};
