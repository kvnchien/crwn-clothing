import React from 'react';
//This is a react-router-dom 5.x feature
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {

  //For Firebase user authentication handling
  unsubscribeFromAuth = null;

  componentDidMount() {

    //The "setCurrentUser" is provided in the props when the 'connect' is used in the export default..
    //The mapDispatchToProps function setup for the 'connect' function does the work for you. 
    const {setCurrentUser} = this.props;

    //Firebase gives you the state change detection capability with
    //the auth.onAuthStateChanged 'open subscription' which feeds the 
    //'user' object into the onAuthStateChanged function... 
    console.log("===> In App.js componentDidMount, the App component is mounted, calling onAuthStateChanged...");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {     
      if(userAuth) {
        console.log("===> Executed auth.onAuthStateChanged: The currentUser is: " + JSON.stringify(userAuth.email));
        //If the 'user' object is not null, then we need to persist the user
        //in the Firestore DB
        const userRef = await createUserProfileDocument(userAuth);

        //After persisting the user in the Firestore DB, the user info
        //needs to be saved to the currentUser object in the this.state
        //by polling from the userRef object returned from the 
        //'createUserProfileDocument() function above
        userRef.onSnapshot(snapShot => {
          //The 'setCurrentUser' is declared & assigned at the beginning of the componentDidMount function
          console.log("===> In App.js componentDidMount:userRef.onSnapshot:");
          console.log(snapShot.id)
          //user-actions.js setCurrentUser takes a 'user' object as an argument.
          //So the entire object we are passing into the setCurrentUser is the 'user' object... 
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
     
      } else {
        console.log("===> Executed auth.onAuthStateChanged and the user is logged out");
        setCurrentUser(userAuth);
      }
      
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
        {/* <Header currentUser={this.state.currentUser}/>   <== We don't use this 'react' way to get the currentUser*/}
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin' render={
            () => this.props.currentUser? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />

          {/* <Route path='/another' component={AnotherPage} /> */}
          
        </Switch>
      </div>
    );
  }

}

//This is the standard naming with the Redux codebases. You can't use other names
//What we are getting from this function is the 'state' object which is actually a reference 
//to the Root Reducer. This is the default implemenation given to you by Redux...
// const mapStateToProps = (state) => ({
//   //The 'state' object here is actually the root reducer object
//   currentUser: state.user.currentUser
// }) 

//The above code can be simplified with destructuring
// const mapStateToProps = ({user}) => ({
//   //The 'state' object here is actually the root reducer object
//   currentUser: user.currentUser
// })

//The 'createStructuredSelector' funcation to pass the 'state' object implicitly
const mapStateToProps = createStructuredSelector({
  //The 'state' object here is actually the root reducer object
  currentUser: selectCurrentUser
})


//The "mapDispatchToProps" functions are expected to return an object. 
//Each fields of the object should be a function, calling which is expected to dispatch an action to the store.
const mapDispatchToProps = dispatch => {
  console.log("===> Invoked mapDispatchToProps():");
  return({
  //a. The 'setCurrentUser' is an object key (mapped as a prop by redux) that points to a function to dispatch the 
  //   setCurrentUser() action
  //b. The 'user' is the parameter object in the setCurrentUser function. The object is injected by the mapDispatchToPorps
  setCurrentUser: user => dispatch(setCurrentUser(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
