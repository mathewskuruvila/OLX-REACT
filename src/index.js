import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Firebase } from './firebase/config';
import {FirebaseContext} from './store/FirebaseContext'
ReactDOM.render(
    <FirebaseContext
<App />, document.getElementById('root'));
