import React, { useState, useRef, Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import User from '../../../utils/Stores/User';
import UserError from '../Error';

const { USER_LOADING, SET_USER, USER_ERROR } = User.actions;

export default function ({
    api,
    name,
    className,
    emailPattern,
    displayUsername,
    usernamePattern,
    passwordPattern,
    EmailMessage = "",
    UsernameMessage = "",
    PasswordMessage = ""
}) {
    User.refreshOnLoad();
    const [validated, setValidated] = useState(false);
    const [/* user not needed */, userDispatch] = User.useContext();
    const emailInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        const email = emailInput.current.value;
        let username;
        if (displayUsername) {
            username = usernameInput.current.value;
        }
        const password = passwordInput.current.value;

        // If we have an email and password we run the loginUser function and clear the form
        doUserFunc(email, username, password);
    };

    // doUserFunc does a post to our "api/login" route and if successful, redirects us the the members page
    function doUserFunc(email, username, password) {
        setValidated(false);
        userDispatch({ type: USER_LOADING });
        api({
            email,
            username,
            password
        }).then(user => {
            userDispatch({ type: SET_USER, user });
        }).catch((err) => {
            userDispatch({ type: USER_ERROR, message: err });
        });
    }

    return (
        <Fragment>
            <h2>{name} Form</h2>
            <Form
                validated={validated}
                onSubmit={handleSubmit}
                className={className}
                noValidate>
                {displayUsername ? (
                    <React.Fragment>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                pattern={emailPattern}
                                type="email"
                                placeholder="Enter email"
                                ref={emailInput} />
                            <Form.Control.Feedback type="invalid">
                                <EmailMessage />
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                pattern={usernamePattern}
                                type="text"
                                placeholder="Enter username"
                                ref={usernameInput} />
                            <Form.Control.Feedback type="invalid">
                                <UsernameMessage />
                            </Form.Control.Feedback>
                        </Form.Group>
                    </React.Fragment>
                ):(
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address or Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter email or username"
                            ref={emailInput} />
                        <Form.Control.Feedback type="invalid">
                            <EmailMessage />
                        </Form.Control.Feedback>
                    </Form.Group>
                )}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        pattern={passwordPattern}
                        type="password"
                        placeholder="Password"
                        ref={passwordInput} />
                    <Form.Control.Feedback type="invalid">
                        <PasswordMessage />
                    </Form.Control.Feedback>
                </Form.Group>
                    <UserError />
                <Button variant="primary" type="submit">
                    {name}
                </Button>
            </Form>
        </Fragment>
    );
}
