import React, { useEffect } from "react";
import { useFormik } from "formik";
import { setSubmitModalFunctionAction } from "../redux/reducers/submitReducer";
import { useDispatch } from "react-redux";
import { addProductActionApi } from "../redux/reducers/storeReducer";

const FormComponent = () => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
    },
    onSubmit: (formValue) => {
      console.log("formvalue", formValue);
      const actionThunk = addProductActionApi(formValue);
      dispatch(actionThunk);
    },
  });

  useEffect(() => {
    const payload = form.handleSubmit;
    const action = setSubmitModalFunctionAction(payload);
    dispatch(action);
  }, []);
  return (
    <div>
      <form onSubmit={form.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            aria-describedby="helpId"
            onInput={form.handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            aria-describedby="helpId"
            onInput={form.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">image</label>
          <input
            type="text"
            name="image"
            id="image"
            className="form-control"
            aria-describedby="helpId"
            onInput={form.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success d-none">
          Lấy value
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
