import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn'
import Home from './components/Home';
import {firebase} from './firebase'


function App() {
  //  simple signup Login
  const [user, setUser] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);// it will help us to signup and sign in
  
  


  
  const SignInWithGoogle = () => {
  
    const google_provider = new firebase.auth.GoogleAuthProvider();  // creates a provider
       firebase.auth().signInWithPopup(google_provider)
       .then((res)=>{
           console.log(res);
         if(!res.additionalUserInfo.profile.email.includes(".edu")){
           setUser("")
         }
       })
       .catch((err)=>{
           console.log(err)
       })
   }
  

  
  
  
  
   
  const clearInputs = () =>{
     setEmail("")
     setPassword("")
  }
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  
  
  const handleLogin = () => {  
    if(email.includes(".edu")){
  clearErrors();
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
              setEmailError(err.message);
              break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
            default:
              setPasswordError(err.message);
      }
    })
  } else {
    setEmailError("email is not valid");
  }
  }
      
      const handleSignup = () => {
        if(email.includes(".edu")){
        clearErrors();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch(err.code){
               case "auth/email-already-in-use":
               case "auth/invalid-email":
                 setEmailError(err.message);
                  break;
               case "auth/weak-password":
                setPasswordError(err.message);
                 break;
              default:
                setPasswordError(err.message);
          }
        })
      } else {
        setEmailError("email is not valid");
      }
      }
  
      const handleLogout = () => {
        firebase.auth().signOut();
      }
  
      const authListener = () => {
          firebase.auth().onAuthStateChanged((user) => {
            if(user) {  // every time user logs in or signup then we have user so we want to clear the inputs and set the user
              console.log(user)
            if(!user.multiFactor.user.email.includes(".edu")){
              setUser("")
              return
            }
              clearInputs();
              setUser(user);
            }else{
              setUser("");
            }
          })
     
     
      }
  
  
      useEffect(()=>{
        authListener();
      })
                     
      
         return (
         
                <div className="flex justify-center pt-10 max-h-screen w-full">
                  { user  ? 
                      ( <Home handleLogout={handleLogout}/>
                       
                        ) :  (
                          <SignIn 
                          email={email}
                          setEmail={setEmail}
                          password={password}
                          setPassword={setPassword}
                         
                          handleLogin={handleLogin}
                          handleLogout={handleLogout}
                          handleSignup={handleSignup}
                          hasAccount={hasAccount}
                          setHasAccount={setHasAccount}
                          emailError={emailError}
                          passwordError={passwordError}
                          SignInWithGoogle={SignInWithGoogle}
                      
                          // loginwithInstagram={loginwithInstagram}
                     />
                        ) 
                }
                
                </div>
              );
  }
  
  export default App;
