import React from 'react'
import {connect} from 'react-redux'
import { loginThunk } from '../redux/user'
/**
 * COMPONENT
 */
 const Login = props => {
  const {handleSubmit} = props

  return (
    <div>
      
        <p>Welcome to our store! To continue please Login..</p>
      
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
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
      } catch (error){
        console.error(error)
      }
    },
  };
};

export default connect(null,mapDispatchToProps)(Login)
























// import React from 'react'
// import { loginThunk } from '../redux/authStore';
// import { connect } from 'react-redux'

// export class Login extends React.Component {
// //    componentDidMount(){
// //        this.props.loadUser()
// //    }
//     render() {
//         console.log('this.props:',this.props)
//         const {handleSubmit} = this.props
//         return (
//             <div>
//                 <section className="vh-100 gradient-custom">
//                     <div className="container py-5 h-100">
//                         <div className="row d-flex justify-content-center align-items-center h-100">
//                             <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//                                 <div className="card bg-dark text-white">
//                                     <div className="card-body p-5 text-center">

//                                         <div className="mb-md-5 mt-md-4 pb-5">

//                                             <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//                                             <p className="text-white-50 mb-5">Please enter your login and password!</p>

//                                             <form onSubmit={handleSubmit}>
//                                                 <div className="form-outline form-white mb-4">
//                                                 <input type="email" id="typeEmailX" className="form-control form-control-lg" />
//                                                 <label className="form-label" htmlFor="typeEmailX">Email</label>
//                                             </div>

//                                             <div className="form-outline form-white mb-4">
//                                                 <input type="password" id="typePasswordX" className="form-control form-control-lg" />
//                                                 <label className="form-label" htmlFor="typePasswordX">Password</label>
//                                             </div>
                                           
                                            

//                                             <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

//                                             <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
//                                             </form>
//                                             <div className="d-flex justify-content-center text-center mt-4 pt-1">
//                                                 <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
//                                                 <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
//                                                 <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
//                                             </div>

//                                         </div>

//                                         <div>
//                                             <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>



//         )
//     }

// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     // Hey, check it out! Because we pass the connected Login to a Route
//     // (we do this in client/index.js), it receives the "route props"
//     // (match, location, and history) as its "own props".
//     const history = ownProps.history
  
//     return {
//     async  handleSubmit (evt) {  //????
//         try{
//           evt.preventDefault();
//           const email = evt.target.email.value;
//           console.log('email:',email)
//           const password = evt.target.password.value;
//           await dispatch(loginThunk({email,password}));
//           ownProps.history.push('/home');
//         }catch(error){
//           console.log(error)
//         }
        
//       }
//     }
//   }
// // const mapDispatchToProps = (dispatch)=>{
// //     return{
// //         loadUser:()=>dispatch(loginThunk())
// //     }
// // }
  
//   export default connect(null, mapDispatchToProps)(Login)
  

