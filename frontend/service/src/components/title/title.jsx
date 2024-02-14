import React from 'react';
import './title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Title extends React.Component {
    render() {
        return (
            <div>
                <div className='flex items-center border-b-2 border-sky-800'>
                    <FontAwesomeIcon icon={this.props.icon} className='size-5'/>
                    <h1 className='ms-2 flex-auto text-2xl font-semibold text-black'>{this.props.title}</h1>
                </div>
                <h3 className='text-md font-medium text-slate-400'>{this.props.subtitle}</h3>
            </div>
        )
    }
}

export default Title;