import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Login from './components/Login';
import Feed from './components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {

  //pull user from datalayer(i.e.Redux) using the Redux function
  const user = useSelector(selectUser);

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
