import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand ml-3" href='#'>Booking</a>
                        <span className="navbar-text">Счастливого пути!</span>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Откуда"
                                   aria-label="Search"/>
                            <input className="form-control mr-sm-2" type="search" placeholder="Куда"
                                   aria-label="Search"/>

                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Найти билеты!
                            </button>
                        </form>

                    </div>
                    <button type="button" className="btn btn-secondary">Регистрация/Вход</button>
                </nav>
            </header>
        );
    }
}


export default Header;
