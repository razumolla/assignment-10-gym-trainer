import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../images/google.png'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error.message} </p>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-info w-50'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '2px' }} className='bg-info w-50'></div>
            </div>
            {errorMessage}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-100 mx-auto d-block'>
                    <img height={25} src={google} alt="" />
                    <span className='px-2'>Google Sign In </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;