import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-25  mx-auto'>
            <h3 className='text-primary text-center mt-3'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-2" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>

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

            <p>Already have an Account? <Link to="/signin" className='text-danger pe-auto text-decoration-none' >Please SignIn</Link> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;