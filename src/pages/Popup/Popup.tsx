import React, { useState } from 'react';
// @ts-ignore
import homeScreenshot from './home.png';

import './Popup.css';

const tabs = ['Summary', 'Recommendations'];

const Popup = () => {
  const [tab, setTab] = useState(tabs[0]);

  if (tab === 'Summary') {
    return (
      <img
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        src={homeScreenshot}
      ></img>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
