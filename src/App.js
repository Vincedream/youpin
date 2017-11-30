import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import DashBoard from './dashboard';
import Product from './container/product/product';
import Login from './container/login/login';
import TestServer from './container/testserver/testserver';
 import TestDemo from './container/testdemo/testdemo';

 


class App extends Component {
  render() {
    
    return (
      <div>        
         <Switch>
          <Route path="/product/:id" component={Product} ></Route>           
          <Route path="/login" component={Login} ></Route>     
          <Route path="/testserver" component={TestServer} ></Route>      
          <Route path="/demo" component={TestDemo} ></Route>      
          <Route component={DashBoard}/>
         </Switch>
           
 
      </div>
    );
  }
}

export default App;
