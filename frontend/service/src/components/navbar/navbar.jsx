import React from 'react';
import './navbar.css';
import '../../output.css';
import Button from '../button/button';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='bg-white'>
                <div className='mx-auto my-5 max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <div className='grid justify-items-start space-y-5 my-8'>
                        <Button path='/' name='Novos' icon='plus'></Button>
                        <Button path='views/progress/progress' name='Em Andamento' icon='bars-progress'></Button>
                        <Button path='views/finalized/finalized' name='Finalizados' icon='check'></Button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;