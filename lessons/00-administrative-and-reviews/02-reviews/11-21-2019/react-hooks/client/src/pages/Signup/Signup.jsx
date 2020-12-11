import React, { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { UserForm } from '../../components';
import User from '../../utils/Stores/User';

function EmailMessage() {
    return (
        <Fragment>
            You must provide a valid email.
        </Fragment>
    );
}

function UsernameMessage() {
    return (
        <Fragment>
        You must provide a valid username.
        <ul>
            <li>No Spaces</li>
            <li>No periods or underscores twice in a row</li>
            <li>Cannot end or begin with underscores or periods</li>
            <li>Cannot have a period immediately next to an underscore</li>
        </ul>
        </Fragment>
    );
}

function PasswordMessage() {
    return (
        <Fragment>
            You must provide a valid password.
                            <ul>
                <li>At least 8 characters long</li>
                <li>Including at least 1 uppercase letter</li>
                <li>Including at least 1 lowercase letter</li>
                <li>Including at least 1 number</li>
                <li>Including at least 1 symbol</li>
            </ul>
        </Fragment>
    );
}

export default function () {
    User.refreshOnLoad();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <UserForm
                        name="Sign Up"
                        className="signup"
                        api={User.API.signup}
                        usernamePattern="^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                        passwordPattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        EmailMessage={EmailMessage}
                        PasswordMessage={PasswordMessage}
                        UsernameMessage={UsernameMessage}
                        displayUsername={true}
                    />
                    <br />
                    <p>Or log in <Link to="/login">here</Link></p>
                </Col>
            </Row>
        </Container>
    );
}
