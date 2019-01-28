import React, {Component} from 'react';


class Content extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.text}</h1>

                    <div className="col-12 col-md-9 col-xl-8 p-3" id='contentitem'>
                    </div>
            </div>
        );
    }
}


export default Content;
