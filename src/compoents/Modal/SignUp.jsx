import React from 'react';

export default function SignUp() {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="signupEmail" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="signupEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signupPassword" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="signupPassword"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
              </div>
              <a type="submit" className="btn btn-primary w-100">Sign Up</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
