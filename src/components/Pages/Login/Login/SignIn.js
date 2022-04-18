import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.css'


const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    let errorMassage;
    if (error) {
        errorMassage = <p className='text-danger'>Error: {error.message}  </p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email');
        }
    }

    return (
        <div className='container w-25  mx-auto sign-in-section' >
            <h3 className='text-primary text-center mt-3'>Please SignIn</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary text-center w-100 mx-auto d-block mb-2" type="submit">
                    Sign In
                </Button>
            </Form>
            {errorMassage}

            <p>New to GYM Center? <Link to="/register" className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default SignIn;