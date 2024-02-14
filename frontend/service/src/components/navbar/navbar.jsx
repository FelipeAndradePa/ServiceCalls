import React from 'react';
import './navbar.css';
import '../../output.css';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import img from '../../assets/logo.png';

const Navbar = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/content');
    }

    return (
        <nav>
            <div className='mx-auto py-8 max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div>
                    <img onClick={handleNavigation} src={img} alt="Techline" className='w-full md:w-1/2 lg:w-3/4 xl:w-5/6' />
                </div>
                <div className='space-y-5 py-14'>
                    <Button path='' name='Página Inicial' icon='house'></Button>
                    <Button path='new' name='Novos' icon='plus'></Button>
                    <Button path='progress' name='Em Andamento' icon='bars-progress'></Button>
                    <Button path='finalized' name='Finalizados' icon='check'></Button>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;