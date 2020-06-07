import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from "./pages/Login/Auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
    
    console.log("PrivateRoute", auth.isAuthenticated);
    console.log("Component", component);
    return (
        <Route
            {...rest}
            render={props => ( 
                auth.isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to='/login'/>
        )} />
            
    );
};
export default PrivateRoute;