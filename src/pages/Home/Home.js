import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Nav from '../../layouts/Nav';


function Home({ ...rest }) {
  console.log({rest})
  return (
    <div >
      <Nav />
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
