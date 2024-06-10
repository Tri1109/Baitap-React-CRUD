import React from "react";

const TanstackQuery = () => {
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Launch
        </button>

        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="form-control"
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor className="form-label">
                      Image
                    </label>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="form-control"
                      aria-describedby="helpId"
                    />
                  </div>
                  <button type="submit" classname="btn btn-success ">
                    Lấy value
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanstackQuery;
