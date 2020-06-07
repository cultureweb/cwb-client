
import React from "react";
import { useHistory, useLocation} from "react-router-dom";
import fakeAuth from './ProtectedRoute';


export default function Login() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    );
}