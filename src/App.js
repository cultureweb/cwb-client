import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from "./history";
import PrivateRoute from "./PrivateRoute";



// Pages
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Page401 from './pages/ErrorPages/Page401';
import Page403 from './pages/ErrorPages/Page403';
import Page404 from './pages/ErrorPages/Page404';
import ItemDetail from './pages/Blog/ItemDetail';
import './assets/css/App.css';




function App() {

  return (
    <Router history={history}>
    <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/403" component={Page403} />
            <Route exact path="/401" component={Page401} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={ItemDetail} />
            <Route exact path="/login" component={Login} /> 
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
      </div>
    </Router>
  );
}


export default App;
