import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
        {/* Header */}
        <Header/>
        
        {/* App Body */}
        <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
        </div>
        
    </div>
  );
}

export default App;
