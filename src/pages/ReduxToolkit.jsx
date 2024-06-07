import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import storeReducer, {
  deleteProductActionApi,
  getProductListActionApi,
} from "../redux/reducers/storeReducer";
import ModalComponent from "../components/ModalComponent";

const ReduxToolkit = () => {
  const { productList } = useSelector((state) => state.storeReducer);
  const dispatch = useDispatch();
  console.log(productList);
  useEffect(() => {
    const actionThunk = getProductListActionApi();
    dispatch(actionThunk);
  }, []);
  return (
    <div className="container">
      <h3>Product list</h3>
      <div>
        {/* Modal trigger button */}
        <button
          type="button"
          className="btn btn-dark btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Add new product
        </button>
        <ModalComponent />
      </div>

      <div className="row mt-4">
        {productList.map((prod, index) => {
          return (
            <div className="col-3 mt-2" key={index}>
              <div className="card">
                <img src={prod.image} alt={prod.alias} />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>
                  <button className="btn btn-dark">Edit</button>
                  <button
                    className="btn btn-dark ms-2"
                    onClick={() => {
                      const deletedAction = deleteProductActionApi(prod.id);
                      dispatch(deletedAction);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReduxToolkit;
