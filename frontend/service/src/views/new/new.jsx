import React from 'react';
import Title from '../../components/title/title';
import './new.css';

class New extends React.Component {
    render() {
        return(
            <div className='font-sans text-xl'>
                <Title title='Novos Chamados'></Title>
            </div>
        )
    }
}

export default New;