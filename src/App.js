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
    //the auth.onAuthStateChanged 'open subscription' which feeds the 
    //'user' object into the onAuthStateChanged function... 
    console.log("===> In App.js componentDidMount, the App component is mounted, calling onAuthStateChanged...");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser: userAuth});
      //console.log("===> In App.js componentDidMount, the currentUser is: " + JSON.stringify(userAuth.email));
      console.log("===> Executed auth.onAuthStateChanged: The currentUser is: " + userAuth);
      
      if(userAuth) {
        //If the 'user' object is not null, then we need to persist the user
        //in the Firestore DB
        const userRef = await createUserProfileDocument(userAuth);

        //After persisting the user in the Firestore DB, the user info
        //needs to be saved to the currentUser object in the this.state
        //by polling from the userRef object returned from the 
        //'createUserProfileDocument() function above
        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            //We pass in a second function here (an arrow function)
            //in order to log the this.state after the this.setState is done executing
            //because the this.setState is an async function.....
            console.log("In onSnapShot inside the this.setState...")
            console.log(this.state);
          });

          console.log("===> Whenever the this.state is changed: ")
          console.log(this.state);
        });
        

      } else {
        //The 'user' object is null, so set the null userAuth to the currentUser in the this.state
        this.setState({currentUser: userAuth})
        //this.setState({currentUser: null})
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
