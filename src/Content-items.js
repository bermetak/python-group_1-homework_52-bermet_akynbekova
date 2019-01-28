import React, {Component} from 'react';


class App extends Component {
    render() {
        return (<div>
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
                <section id='content'>

                <div className="row flex-xl-nowrap">
                    <div className="col-12 col-md-3 col-xl-2" id='sidebar'>

                        <div className="list-group">


                            <a href="#" className="list-group-item list-group-item-action list-group-item-info">Air
                                Kyrgyzstan</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-dark">Кыргызстан
                                Аба Жолдору</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-info">Turkish
                                Airlines</a>
                            <a href="#"
                               className="list-group-item list-group-item-action list-group-item-dark">Aeroflot</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-info">Air
                                Astana</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-9 col-xl-8 p-3" id='cntent'>
                        <div className="card w-100">
                            <div className="card-body">
                                <h5 className="card-title">Бишкек - Алматы</h5>
                                <p className="card-text">Air
                                Astana </p>
                                <p>20$</p>
                                <a href="#" className="btn btn-primary">Купить</a>
                            </div>
                        </div>

                        <div className="card w-50">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-block col-xl-2 p-3"></div>
                </div>

            </section>
                <footer className='bg-dark'>
                    <div className="container">
                    <p className='bg-dark text-light pt-3 pb-3 text-center'>Booking (c) Все права защищены</p>
                    </div>
                </footer>









            </div>
        );
    }
}


export default App;
