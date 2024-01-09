import React from 'react';
import Title from '../../components/title/title';
import './finalized.css';

class Finalized extends React.Component {
    render() {
        return(
            <div>
                <div className='font-sans'>
                    <Title title='Chamados Finalizados' subtitle='Acompanhe os chamados finalizados'></Title>
                </div>
                <div className='my-16'>
                    <table className='w-5/6 divide-y divide-gray-200'>
                        <thead>
                            <tr>
                                <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Protocolo</th>
                                <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Data</th>
                                <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Hora</th>
                                <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Empresa</th>
                                <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Solicitante</th>
                                <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'> 
                            <tr>
                                <th className='py-3 font-medium'>202401082133</th>
                                <th className='py-3 font-medium'>08/01/2024</th>
                                <th className='py-3 font-medium'>21:40</th>
                                <th className='py-3 font-medium'>Techline</th>
                                <th className='py-3 font-medium'>Felipe Andrade</th>
                                <th className='py-3 font-medium'>Não atendido</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Finalized;