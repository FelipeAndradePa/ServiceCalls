import React from "react";
import "./button.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Button extends React.Component {
    render() {
        return <button className="flex flex-row">
                    <FontAwesomeIcon icon={this.props.icon} />
                    <Link className="text-base ms-2 link" to={this.props.path}> {this.props.name} </Link>
                </button>
    }
}

export default Button;