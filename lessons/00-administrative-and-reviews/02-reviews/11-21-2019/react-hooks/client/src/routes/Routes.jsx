/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from "react";
import User from "../utils/Stores/User";
import PetPage from "../utils/Stores/PetPage";
import { Switch, Route } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {
    LoggedInRoute,
    LoggedOutRoute
} from "../components";
import {
    NotFound,
    Login,
    Signup,
    Home,
    PetPageList,
    PetPageCreate
} from "../pages";

function Routes() {
    const [{ pageLoading }] = User.useContext();
    User.refreshOnLoad();
    return (
        <Fragment>
            {pageLoading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner className="mt-5" animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <PetPage.Provider>
                    <Switch>
                        <LoggedInRoute exact path="/" component={PetPageList} />
                        <LoggedInRoute exact path="/create" component={PetPageCreate} />
                        <LoggedInRoute exact path="/:username/:petname" component={NotFound} />
                        <LoggedOutRoute exact path="/login" component={Login} />
                        <LoggedOutRoute exact path="/signup" component={Signup} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </PetPage.Provider>
            )}
        </Fragment>
    );
}

export default Routes;
