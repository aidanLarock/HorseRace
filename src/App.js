import logo from './logo.svg';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';


  const Modal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

  const Main = () => (
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
        <Popup
    trigger={<button className="button">How To Play?</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Rules</div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
            <button className="button" onClick={() => {
                console.log('modal closed');
                close();
              }}
            >
            Got It!
          </button>
        </div>
      </div>
    )}
  </Popup>
      </header>
    </div>
  );


export default Main;
