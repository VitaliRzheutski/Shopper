import React from "react";
import { connect } from "react-redux";
import { singUpUserThunk } from "../redux/user";

const SignUp = (props) => {
  const { handleSubmit } = props;
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-7 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-grey text-dark">
              <div className="card-body-SignUp p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <form onSubmit={handleSubmit} className="loginForm">
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        className="email"
                        name="email"
                        type="text"
                        className=" form-control-lg"
                      />
                    </div>
                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className=" form-control-lg"
                      />
                    </div>
                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        First name
                      </label>
                      <input
                        name="firstName"
                        type="firstName"
                        className=" form-control-lg"
                      />
                    </div>
                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Last name
                      </label>
                      <input
                        name="lastName"
                        type="lastName"
                        className=" form-control-lg"
                      />
                    </div>
                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Address
                      </label>
                      <input
                        name="address"
                        type="address"
                        className=" form-control-lg"
                      />
                    </div>
                    <div className="login">
                      <button
                        className=" btn-outline btn-lg px-5"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit(evt) {
      try {
        evt.preventDefault();
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        const firstName = evt.target.firstName.value;
        const lastName = evt.target.lastName.value;
        const address = evt.target.address.value;

        await dispatch(
          singUpUserThunk({ email, password, firstName, lastName, address })
        );
        ownProps.history.push("/newUser"); //   '/home'
      } catch (error) {
        console.error(error);
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
