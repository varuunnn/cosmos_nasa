import React from 'react'
import { auth, provider} from '../firebase'; 

const SignIn = () => {

    const SigninWithFirebase = () => {
        auth.signInWithPopup(provider)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='btn-mobile'>
            <button className='btn btn--primary btn--outline' onClick={SigninWithFirebase} >
                Signin with Google
            </button>
        </div>
    );
}

export default SignIn
