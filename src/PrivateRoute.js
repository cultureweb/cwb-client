import React, { useEffect } from 'react';
import { useToggle } from "react-use";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setAuthenticated] = useToggle(false);

    useEffect(() => {
        const checkToken = async () => {
           
            const data = await fetch('https://cwb-server.herokuapp.com/api/v1/auth-from-token', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                }
            });

            const response = await data.json();
            console.log({ response })
            if(response){
                setAuthenticated(response.isAuthenticated)
            }
        }
        checkToken();
    }, [isAuthenticated])
    
    
    
    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
            this.isAuthenticated = true
            setTimeout(cb, 100)
        }
    }

    return (
        <Route
            {...rest}
            render={props => ( 
                fakeAuth.isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to='/login' />
        )} />
            
    );
};
export default PrivateRoute;