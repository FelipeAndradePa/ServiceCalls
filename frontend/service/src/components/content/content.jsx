import React from 'react';
import './content.css';
import Navbar from '../navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Finalized from '../../views/finalized/finalized';
import Progress from '../../views/progress/progress';
import New from '../../views/new/new';

class Content extends React.Component {
    render() {
        return (
            <Router>
                <div className='min-h-screen grid grid-cols-9 gap-4'>
                    <div className='col-span-1'>
                        <Navbar/>
                    </div>
                    <div className='col-span-8 flex justify-center'>
                        <Routes>
                            <Route path='/views/finalized/finalized' element={<Finalized />}/>
                            <Route path='/views/progress/progress' element={<Progress />}/>
                            <Route path='/' element={<New />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Content;