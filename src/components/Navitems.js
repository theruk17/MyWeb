import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navitems extends Component {
    render() {
        return (
            <li class="nav-item" id={this.props.item}>
                <Link class="nav-link " to={this.props.tolink} >{this.props.item}</Link>
            </li>
        );
    }
}

export default Navitems;