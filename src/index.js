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


const company = (<div>
    <Sidebar name="Кыргызстан Аба Жолдору" />
    <Sidebar name="Turkish Airlines" />
    <Sidebar name="Aeroflot" />
    <Sidebar name="Air Astana" />
</div>);
ReactDOM.render(company, document.getElementById('sidebar'));

ReactDOM.render(<Content text={'Билеты по лучшим направлениям! Бронируй сейчас!'}/>, document.getElementById('content'));

const fly = (<div>
    <ContentItems direction={'Бишкек - Алматы'} company={'Air Astana'} price={'20$'} date={'30 января 2019'} />
    <ContentItems direction={'Бишкек - Ташкент'} company={'Кыргызстан Аба Жолдору'} price={'20$'} date={'30 января 2019'} />
    <ContentItems direction={'Бишкек - Караганда'} company={'Air Astana'} price={'70$'} date={'30 января 2019'} />
    <ContentItems direction={'Бишкек - Красноярск'} company={'Aeroflot'} price={'200$'} date={'30 января 2019'} />

</div>);
ReactDOM.render(fly, document.getElementById('contentitem'));

ReactDOM.render(<Footer text={'Booking (c) Все права защищены'}/>, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
