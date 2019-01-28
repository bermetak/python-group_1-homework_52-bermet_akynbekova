import React, {Component} from 'react';


class App extends Component {
    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.direction} ({this.props.company})</h5>
                    <p>{this.props.date}</p>
                    <p className="card-text">{this.props.price}</p>
                    <a href="#" className="btn btn-primary">Купить билет</a>
                </div>
            </div>

        );
    }
}


export default App;
