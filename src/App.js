import React from 'react';
import Nav from './components/Nav';
import About from './views/About';
import Blog from './views/Blog';
import Home from './views/Home';
import Login from './views/Login';
import Page401 from './views/Page401';
import Page403 from './views/Page403';
import Page404 from './views/Page404';
import ItemDetail from './components/ItemDetail';
import Dashboard from './views/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/403" component={Page403} />
            <Route exact path="/401" component={Page401} />
            <Route exact path="/about"  component={About} />
            <Route exact path="/blog"  component={Blog} />
            <Route path="/blog/:id" component={ItemDetail} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admin" component={Dashboard} />
          </Switch>
      </div>
    </Router>
  );
}


export default App;
