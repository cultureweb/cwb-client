import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
            this.isAuthenticated = true
            setTimeout(cb, 100)
        }
    }

    return (
        <Route
            {...props}
            render={innerPropss => ( 
                fakeAuth.isAuthenticated === true
                    ? <Component {...innerPropss} />
                    : <Redirect to='/login' />
        )} />
            
    );
};
export default PrivateRoute;