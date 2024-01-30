import React from 'react';
import './content.css';
import Navbar from '../navbar/navbar';
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';

class Content extends React.Component {
    render() {
        return (
            <div className='min-h-screen grid grid-cols-12 gap-2'>
                <div className='bg-gray-300 border-r col-span-2'>
                    <Navbar />
                </div>
                <div className='p-24 col-span-10 flex justify-start'>
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default Content;