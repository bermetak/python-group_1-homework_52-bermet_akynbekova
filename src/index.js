import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
import ContentItems from './ContentItems';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header happy={'Счастливого пути!'}/>, document.getElementById('header'));
ReactDOM.render(<Footer text={'Booking (c) Все права защищены'}/>, document.getElementById('footer'));

const company = (<div>
    <Sidebar name="Кыргызстан Аба Жолдору" />
    <Sidebar name="Turkish Airlines" />
    <Sidebar name="Aeroflot" />
    <Sidebar name="Air Astana" />
</div>);
ReactDOM.render(company, document.getElementById('sidebar'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
