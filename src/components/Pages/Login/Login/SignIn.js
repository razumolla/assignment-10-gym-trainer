import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

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
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    let errorMassage;
    if (error) {
        errorMassage = <p className='text-danger'>Error: {error.message}  </p>
    }

    if (loading) {
        return <Loading></Loading>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-25  mx-auto'>
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


            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;