/*Rastrear a company que está enviando o chamado através do usuario*/
import React, { useState } from 'react';
import axios from 'axios';
import './initial.css';
import { getUsername } from '../login/login';
import Title from '../../components/title/title';
import Login from '../login/login';

const Formulario = () => {

    const [state, setState] = React.useState({
        name: '',
        company: '',
        email: '',
        subject: '',
        description: ''
    });

    const handleSubmit = async (event) => {

        event.preventDefault();
        const { name, company, email, subject, description } = state;

        try {
            const response = await axios.post('http://localhost:3001/new', { name, company, email, subject, description });
            setState({
                name: '',
                company: '',
                email: '',
                subject: '',
                description: ''
            });

        } catch (error) {
            console.error('Erro ao enviar formulário ', error.response.data.error);
        }
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={state.name}
                                onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-600">
                                Empresa
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={state.company}
                                onChange={(e) => setState((prev) => ({ ...prev, company: e.target.value }))}
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
                                value={state.email}
                                onChange={(e) => setState((prev) => ({ ...prev, email: e.target.value }))}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
                                Assunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={state.subject}
                                onChange={(e) => setState((prev) => ({ ...prev, subject: e.target.value }))}
                                className="mt-2 p-2 w-96 border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                                Descrição
                            </label>
                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                value={state.description}
                                onChange={(e) => setState((prev) => ({ ...prev, description: e.target.value }))}
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
