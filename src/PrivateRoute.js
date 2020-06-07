import React from 'react';
import { Route } from 'react-router-dom';
import auth from "./pages/Login/Auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
    
    console.log("PrivateRoute", auth.isAuthenticated);
   
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    console.log("if isAuthenticated")
                    return <Component {...props} />;
                }
                else {
                    // return <Redirect to={{ pathname: '/login' }} />
                }
            }
            }
        />
    );
};
export default PrivateRoute;