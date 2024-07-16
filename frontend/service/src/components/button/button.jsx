import React from "react";
import "./button.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Button = ({ path, name, icon }) => {
    return (
        <button className="hover:bg-gray-400 p-1 hover:p-3 rounded-lg w-full flex flex-row justify-start items-center">
            <FontAwesomeIcon icon={icon} />
            <Link className="text-base ms-2 link" to={path}>{name}</Link>
        </button>
    );
};

Button.defaultProps = {
    name: '',
};

Button.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

export default Button;
