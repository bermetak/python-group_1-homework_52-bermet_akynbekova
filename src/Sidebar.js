import React, {Component} from 'react';


class Sidebar extends Component {
    render() {
        return (
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action list-group-item-info">{this.props.name}</a>
            </div>
        );
    }
}


export default Sidebar;
