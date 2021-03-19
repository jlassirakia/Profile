
import './App.css';
import React from 'react';
import  Adress from './Component/Profile/Adress';
import  FullName from './Component/Profile/FullName';
import  Profile from './Component/Profile/ProfilPhoto';

function App() {
  return (
    <div className="Cont">
    <Profile />,
    <FullName/>;
    
    <Adress />
    </div>
  
   
  );
}

export default App;
