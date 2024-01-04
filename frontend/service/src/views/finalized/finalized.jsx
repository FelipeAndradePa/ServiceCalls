import React from 'react';
import Title from '../../components/title/title';
import './finalized.css';

class Finalized extends React.Component {
    render() {
        return(
            <div>
                <div className='font-sans text-xl'>
                    <Title title='Novos Chamados'></Title>
                </div>
                <div className='my-16'>
                    <table className='w-5/6 divide-y divide-gray-200'>
                        <thead>
                            <tr>
                                <th className='py-3 px-6 text-center bg-gray-100'>Data</th>
                                <th className='py-3 px-6 text-center bg-gray-100'>Hora</th>
                                <th className='py-3 px-6 text-center bg-gray-100'>Empresa</th>
                                <th className='w-1/4 py-3 px-6 text-center bg-gray-100'>Nome</th>
                                <th className='w-1/2 py-3 px-6 text-center bg-gray-100'>Descrição</th>
                                <th className='py-3 px-6 text-center bg-gray-100'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'> 
                            <tr>
                                <th className='py-4 px-6'>04/01/2024</th>
                                <th className='py-4 px-6'>18:27</th>
                                <th className='py-4 px-6'>Techline</th>
                                <th className='py-4 px-6'>Felipe Andrade</th>
                                <th className='py-4 px-6'>Não estou conseguindo acessar o sistema para ter acesso aos relatórios.</th>
                                <th className='py-4 px-6'>Finalizado</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Finalized;