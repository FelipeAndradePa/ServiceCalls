/*Rastrear a empresa que está enviando o chamado através do usuario*/
import React, { useState } from 'react';
import './initial.css';
import { getUsername } from '../login/login';
import Title from '../../components/title/title';
import Login from '../login/login';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para lidar com os dados do formulário
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);
    };

    return (
        <div>
            <div className='font-sans'>
                <Title title='Página Inicial' subtitle='Bem Vindo ao gerenciador de chamados!' icon='house'></Title>
            </div>
            <div className="flex space-x-4 mt-20">
                <div className="flex-auto p-4 bg-blue-500 rounded-lg text-white h-52 w-80">
                    <h2 className="text-xl font-semibold">Novos Chamados</h2>
                    <p className="text-center mt-8 text-6xl">10</p>
                </div>
                <div className="flex-auto p-4 bg-yellow-500 rounded-lg text-white h-52 w-80">
                    <h2 className="text-xl font-semibold">Chamados em Andamento</h2>
                    <p className="text-center mt-8 text-6xl">5</p>
                </div>
                <div className="flex-auto p-4 bg-green-500 rounded-lg text-white h-52 w-80">
                    <h2 className="text-xl font-semibold">Chamados Finalizados</h2>
                    <p className="text-center mt-8 text-6xl">20</p>
                </div>
            </div>
            <div className="m-8 p-6">
                <div className='flex justify-center'>
                    <h2 className="text-3xl font-semibold mt-10 mb-14">Envie um novo chamado</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between'>
                        <div className="mb-4">
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-600">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="empresa" className="block text-sm font-medium text-gray-600">
                                Empresa
                            </label>
                            <input
                                type="text"
                                id="empresa"
                                name="empresa"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="assunto" className="block text-sm font-medium text-gray-600">
                                Assunto
                            </label>
                            <input
                                type="text"
                                id="assunto"
                                name="assunto"
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="mb-6">
                            <label htmlFor="descricao" className="block text-sm font-medium text-gray-600">
                                Descrição
                            </label>
                            <textarea
                                type="text"
                                id="descricao"
                                name="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                className="mt-2 p-2 w-full h-32 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button type="submit" className="bSubmit w-36 h-10 rounded-md">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
