import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
//import auth from "./pages/Login/Auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
    
        useEffect(() => {
            checkauth();
        }, [])
        const [isAuth, setIsAuth] = useState(false)
        const checkauth = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.log({token})
            }
            if (token) {
                
                const options = {
                    method: 'get',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "x-access-token": token

                    }
                };

                const data = await fetch('https://cwb-server.herokuapp.com/api/v1/auth-from-token', options);

                const response = await data.json();
                setIsAuth(response.isAuthenticated);
            }
            
          

        }


    // const bool = auth.isAuthenticated();
    // console.log({bool})
   
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuth) {
                    console.log("yes is isAuthenticated")
                    return <Component {...props} />;
                }
                
                   // return <Redirect to={{ pathname: '/login' }} />
                
            
            }
        }
        />
    );
   
};
export default PrivateRoute;