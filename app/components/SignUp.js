import React from 'react'
import { connect } from 'react-redux'
import { singUpUserThunk } from '../redux/user'
/**
 * COMPONENT
 */
const SignUp = props => {
    const { handleSubmit } = props
    console.log('props:',props)



    return (
        <div>
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
                    <label htmlFor="firstName">
                        <small>First name</small>
                    </label>
                    <input name="firstName" type="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">
                        <small>Last name</small>
                    </label>
                    <input name="lastName" type="lastName" />
                </div>

                <div>
                    <label htmlFor="address">
                        <small>Address</small>
                    </label>
                    <input name="address" type="address" />
                </div>

                <div>
                    <button type="">Signup</button>
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
                const firstName = evt.target.firstName.value;
                const lastName = evt.target.lastName.value;
                const address = evt.target.address.value;
                
                await dispatch(singUpUserThunk({ email, password,firstName,lastName,address }));
                ownProps.history.push("/home");
            } catch (error) {
                console.error(error)
            }
        },
    };
};

export default connect(null, mapDispatchToProps)(SignUp)



















