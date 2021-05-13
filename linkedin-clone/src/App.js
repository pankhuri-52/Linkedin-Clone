import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Login from './components/Login';
import Feed from './components/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, login } from './features/userSlice';
import { auth } from './components/firebase';

function App() {

  //pull user from datalayer(i.e.Redux) using the Redux function
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    //to persist with the authentication so that we dont get logged out after refreshing
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoURL : userAuth.photoURL
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
        {/* Header */}
        <Header />
        
        {
          !user ?
           (<Login />) :
            
            //  App Body
            <div className="app__body">
              <SideBar />
              <Feed />
              {/* <Widgets />  */}
            </div>
        }
        
        
    </div>
  );
}

export default App;
