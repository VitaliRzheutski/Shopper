import React from 'react'
import { connect } from 'react-redux'
import { loginThunk } from '../redux/user'
/**
 * COMPONENT
 */
const SignUp = props => {
    const { handleSubmit } = props
    // console.log('props:',props)

    return (
        <div>
            <form >
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
                    <label htmlFor="firstName">
                        <small>First name</small>
                    </label>
                    <input name="firstName" type="firstName" />
                </div>
                <div>
                    <label htmlFor="lastname">
                        <small>Last name</small>
                    </label>
                    <input name="lastname" type="lastname" />
                </div>

                <div>
                    <label htmlFor="address">
                        <small>Address</small>
                    </label>
                    <input name="address" type="address" />
                </div>

                <div>
                    <button type="submit">button</button>
                </div>
                {/* {error && error.response && <div> {error.response.data} </div>} */}
            </form>
            {/* <a href="/auth/google"> with Google</a> */}
        </div>
    )
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         async handleSubmit(evt) {
//             try {
//                 evt.preventDefault();
//                 const email = evt.target.email.value;
//                 const password = evt.target.password.value;
//                 await dispatch(loginThunk({ email, password }));
//                 ownProps.history.push("/home");
//             } catch (error) {
//                 console.error(error)
//             }
//         },
//     };
// };

// export default connect(null, mapDispatchToProps)(SignUp)

export default SignUp




















