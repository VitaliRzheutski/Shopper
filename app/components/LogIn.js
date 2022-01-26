import React from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../redux/user'
import { Link } from 'react-router-dom'
/**
 * COMPONENT
 */
const Login = props => {
  const { handleSubmit } = props

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-4 h-100" onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-grey text-dark" > 
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5" >
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-dark-50 mb-5">Please enter your login and password!</p>
                  <form onSubmit={handleSubmit} className='loginForm' >
                    <div className='form-outline form-white mb-4'>
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                      <input className="email" name="email" type="text" className=" form-control-lg" />
                    </div>
                    <div className="form-outline form-dark mb-4">
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                      <input name="password" type="password" className=" form-control-lg" />
                    </div>
                    <div className='login'>
                      <button className=" btn-outline btn-lg px-5" type="submit">Login</button>
                    </div>
                  </form>
                </div>
                <div>
                  <p className="mb-0">Don't have an account? <Link className="text-dark-50 fw-bold sp" to="/signup">Sign Up</Link> </p>
                  

                  {/* <a href="signup" className="text-dark-50 fw-bold">Sign Up</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit(evt) {
      try {
        evt.preventDefault();
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        await dispatch(loginThunk({ email, password }));
        ownProps.history.push("/home");
        // ownProps.history.push("/userpage");
      } catch (error) {
        console.error(error)
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(Login)


