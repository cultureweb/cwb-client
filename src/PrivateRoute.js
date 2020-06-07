// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useEffect, useState } from 'react';
import { useToggle } from "react-use";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setAuthenticated] = useToggle(false);
    const [errors, setErrors] = useState("");

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("token");

            return await fetch('https://cwb-server.herokuapp.com/api/v1/auth-from-token', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token
                }
            }).then(res => {
                const responseJson = res.json();
                if (res) {
                    setAuthenticated(responseJson.isAuthenticated)
                }
            }).catch(err => {
                setErrors(err)
                console.log(errors)
            })

        //     const response = await data.json();
        //     console.log({ response })
        //     if(response){
        //         setAuthenticated(response.isAuthenticated)
        //     }
        }
        checkToken();
    }, [])
    
    
    
    // const fakeAuth = {
    //     isAuthenticated: false,
    //     authenticate(cb) {
    //         this.isAuthenticated = true
    //         setTimeout(cb, 100)
    //     }
    // }

    return (
        <Route
            {...rest}
            render={props => ( 
                isAuthenticated === true
                    ? <Component {...props} />
                    : <Redirect to='/login'/>
        )} />
            
    );
};
export default PrivateRoute;