import React from 'react';
//This is a react-router-dom 5.x feature
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
//import AnotherPage from './test/anotherpage.component';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* The following <Switch/> and <Route/> are react-router-dom 5.x feature
          The react-router-dom 6 uses <Routers/> in place of <Switch/> 
      */}
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />

        {/* <Route path='/another' component={AnotherPage} /> */}
        
      </Switch>
    </div>
  );
}

export default App;
