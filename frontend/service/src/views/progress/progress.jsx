import React from 'react';
import Title from '../../components/title/title';
import './progress.css';

class Progress extends React.Component {
    render() {
        return(
            <div>
                <div className='font-sans text-xl'>
                    <Title title='Chamados em Andamento'></Title>
                </div>
                <div className='my-16'>
                    <table className='w-5/6 divide-y divide-gray-200'>
                        <thead>
                            <tr>
                                <th className='py-3 px-6 text-left bg-gray-100'>Empresa</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Nome</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Email</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Motivação</th>
                                <th className='py-3 px-6 text-left bg-gray-100'>Descrição</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'> 
                            <tr>
                                <th className='py-4 px-6'>Techline</th>
                                <th className='py-4 px-6'>Felipe Andrade</th>
                                <th className='py-4 px-6'>felipeandrade.devpro@gmail.com</th>
                                <th className='py-4 px-6'>Sistema com defeito</th>
                                <th className='py-4 px-6'>Não estou conseguindo acessar o sistema para ter acesso aos relatórios.</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Progress;