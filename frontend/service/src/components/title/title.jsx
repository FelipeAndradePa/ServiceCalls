import React from 'react';
import './title.css'

class Title extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>
    }
}

export default Title;