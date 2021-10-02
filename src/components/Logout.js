import React from 'react'
import { auth } from '../firebase'; 

const Logout = () => {

    const logout = () => {
        auth.signOut()
        .then(console.log("user logged out"));
    }

    return (
        <div className='btn-mobile'>
            <button className='btn btn--primary btn--outline' onClick={logout} >
                Logout
            </button>
        </div>
    );
}

export default Logout
