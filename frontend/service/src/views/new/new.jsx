import React from 'react';
import Title from '../../components/title/title';
import './new.css';

class New extends React.Component {
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
                                <th className='py-3 px-6 text-left bg-gray-100'>Data</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Empresa</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Nome</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Email</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Descrição</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'> 
                            <tr>
                                <th className='py-4 px-6'>04/01/2024 18:47</th>
                                <th className='py-4 px-6'>Techline</th>
                                <th className='py-4 px-6'>Felipe Andrade</th>
                                <th className='py-4 px-6'>felipeandrade.devpro@gmail.com</th>
                                <th className='py-4 px-6'>Não estou conseguindo acessar o sistema para ter acesso aos relatórios.</th>
                                <th className='py-4 px-6'>Não atendido</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default New;