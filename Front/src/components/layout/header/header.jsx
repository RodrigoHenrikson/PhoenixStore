import React from 'react';
import "./header.scss"
import NavBar from './navbar';


const MainHeader = () => {
  return (
    <header className="main-header">
      
      <div className="nameandlogo__container">
        <div id="namePhoenix">
          <h1 className="name__Phoenix">Phoenix Store</h1>
        </div>
        <div className="logo"></div>
      </div>
      <NavBar />
    </header>
  );
};

export default MainHeader;