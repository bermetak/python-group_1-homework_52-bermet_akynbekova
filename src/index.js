import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header happy={'Счастливого пути!'}/>, document.getElementById('header'));
ReactDOM.render(<Footer text={'Booking (c) Все права защищены'}/>, document.getElementById('footer'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
