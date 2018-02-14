import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SendPlayer from './components/playerComponents/SendPlayer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('kwik'));
registerServiceWorker();
