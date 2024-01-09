import React from 'react';
import './title.css'

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className='text-2xl font-semibold text-black border-b-2 border-sky-800'>{this.props.title}</h1>
                <h3 className='text-md font-medium text-slate-400'>{this.props.subtitle}</h3>
            </div>
        )
    }
}

export default Title;