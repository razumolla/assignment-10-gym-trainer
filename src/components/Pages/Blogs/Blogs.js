import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-3 w-100'>
            <h3>##Question</h3>
            <h5>Q-1: what is the difference between authentication and authorization?</h5>
            <p>
                Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.
            </p>

            <h5>Q-2: Why are you using firebase?</h5>
            <p>
                Authentication is used by a server when the server needs to know exactly who is accessing their information or site. Authentication is used by a client when the client needs to know that the server is the system it claims to be. In authentication, the user or computer has to prove its identity to the server or client.
            </p>

            <h5>
                Q-2.1: What other options do you have to implement authentication?
            </h5>
            <p>
                1. SecureAuth Identity Platform,
                2. Auth0,
                3. Microsoft Azure Active Directory,
                4. Rippling,
                5. JumpCloud,
                6. CyberArk Identity ...etc.
            </p>
            <h5>
                Q-3: What other services does firebase provide other than authentication?
            </h5>
            <p>
                There are many services which Firebase provides, Most useful of them are-
                1. Cloud Firestore,
                2. Cloud Functions,
                3. Authentication,
                4. Hosting,
                5. Cloud Storage,
                6. Google Analytics,
                7. Predictions,
                8. Cloud Messaging,
            </p>

        </div>
    );
};

export default Blogs;