import React from "react";
import "./button.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBarsProgress, faPlus } from '@fortawesome/free-solid-svg-icons';


class Button extends React.Component {
    render() {
        return <button className="button">
                    <FontAwesomeIcon icon={this.props.icon} />
                    <Link className="link" to={this.props.path}> {this.props.name} </Link>
                </button>
    }
}

export default Button;