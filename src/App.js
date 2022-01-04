import React from 'react';
//This is a react-router-dom 5.x feature
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
//import AnotherPage from './test/anotherpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

class App extends React.Component {

  //For Firebase user authentication handling
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    //Firebase gives you the state change detection capability with
    //the auth.onAuthStateChanged 'open subscription' which feed the 
    //'user' object into the onAuthStateChanged function... 
    console.log("===> App.js is mounted!!")
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      //this.setState({currentUser: user});
      //console.log("===> In App.js componentDidMount, the currentUser is: " + JSON.stringify(user.email));
      createUserProfileDocument(user);
      console.log("===> In App.js componentDidMount, the currentUser is: " + user);
    });    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* The following <Switch/> and <Route/> are react-router-dom 5.x feature
            The react-router-dom 6 uses <Routers/> in place of <Switch/> 
        */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />

          {/* <Route path='/another' component={AnotherPage} /> */}
          
        </Switch>
      </div>
    );
  }

}

export default App;
