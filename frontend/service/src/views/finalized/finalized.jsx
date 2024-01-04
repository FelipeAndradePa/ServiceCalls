import React from 'react';
import Title from '../../components/title/title';
import './finalized.css';

class Finalized extends React.Component {
    render() {
        return(
            <div className='font-sans text-xl'>
                <Title title='Chamados Finalizados'></Title>
            </div>
        )
    }
}

export default Finalized;