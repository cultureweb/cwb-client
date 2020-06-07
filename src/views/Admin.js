import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Page from './Page';
import "../assets/css/style.css";
//import AdminNav from '../layouts/AdminNav';

export default function Admin() {
    const { url, path } = useRouteMatch();
    console.log(useRouteMatch())

    console.log("path", path);
    console.log("url", url);
    const navStyle = {
        color: "white",
        textDecoration:"none"
    }

    return (
        <div>
            {/* <AdminNav /> */}
            <nav>
                <Link style={navStyle} to="/admin"><h3>Admin</h3></Link>
                <ul className="nav-links">
                    <Link style={navStyle} to={`${url}/create`}><li>Create</li></Link>
                    <Link style={navStyle} to={`${url}/edit`}><li>Edit</li></Link>
                </ul>
               
            </nav>
            <Switch>
                <Route exact path={path}>
                    Please Select Topic
        </Route>
                <Route path={path + "/:page"} component={Page} />
            </Switch>
        </div>
    );
}