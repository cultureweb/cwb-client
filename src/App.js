import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./views/Home";
import Admin from './views/Admin';
import Login from "./views/Login";
//import Nav from './layouts/Nav'
import ProtectedRoute from "./views/ProtectedRoute";
import "./assets/css/style.css";

function App() {
    return (
        <div className="App">
            <Router>
                
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route path="/admin" component={Admin} /> */}
                    <ProtectedRoute path="/admin">
                        <Admin />
                    </ProtectedRoute>
                </Switch>
            </Router>
        </div>
    );
}
export default App;


