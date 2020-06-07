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

export default function Home() {
    const { url, path } = useRouteMatch();
    console.log(useRouteMatch())
    console.log("home path", path);
    console.log("home url", url);
    const navStyle = {
        color: "white",
        textDecoration: "none"
    }

    return (
    <div>
        <nav>
            <Link style={navStyle} to="/home" ><h3>Logo</h3></Link>
            <ul className="nav-links">
                <Link style={navStyle} to={`${url}about`}><li>About</li></Link>
                <Link style={navStyle} to={`${url}blog`}><li>Blog</li></Link>
            </ul>
        </nav>
        <Switch>
            <Route path={path}>
                Please Select Topic
        </Route>
            <Route path={path + "/:page"} component={Page} />
        </Switch>
    </div>
        
        )
}