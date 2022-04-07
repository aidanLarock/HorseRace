import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Horse Racing</h1>
        <div className="Players">
        <h3>
          Number of Players: 
        </h3>
        <input type="text" name="name" />
        <button>➜</button>
        </div>
        <br></br>
        <input
          type="button"
          value="How To Play?"
          onClick={togglePopup}
        />

      {isOpen && <Popup
      content={<>
        <b>How To Play Horse Racing</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <input
          type="button"
          value="Got It!"
          onClick={togglePopup}
        />
      </>}
        handleClose={togglePopup}
      />}
      </header>
    </div>
  );
}

export default App;
