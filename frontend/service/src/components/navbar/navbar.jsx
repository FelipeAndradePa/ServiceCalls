import React from 'react';
import './navbar.css';
import '../../output.css';
import Button from '../button/button';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='bg-white'>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <div className='flex flex-col space-y-4'>
                        <Button path='/' name='Novos Chamados' icon=></Button>
                        <Button path='views/progress/progress' name='Chamados em Andamento' icon='faBarsProgress'></Button>
                        <Button path='views/finalized/finalized' name='Chamados Finalizados' icon='faCheck'></Button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;