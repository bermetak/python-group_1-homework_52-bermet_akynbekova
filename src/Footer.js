import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
                <footer className='bg-dark'>
                    <div className="container">
                    <p className='bg-dark text-light pt-3 pb-3 text-center'>{this.props.text}</p>
                    </div>
                </footer>
        );
    }
}

export default Footer;
