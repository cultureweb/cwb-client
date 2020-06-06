import React from 'react';
import Nav from './Nav';
import About from './About';
import Blog from './Blog';
import ItemDetail from './ItemDetail';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
   
 
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={ItemDetail} />
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div> 
    <h1>Home Page</h1>
  </div>
)

export default App;
