import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [state, setState] = React.useState({
        email: '',
        username: '',
        company: '',
        password: ''
    });

    const handleRegister = async () => {
        const { email, username, company, password } = state;

        try {
            const response = await axios.post('http://localhost:3001/register', { email, username, company, password });
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error('Erro ao cadastrar usuário ', error.response.data.error);
        }
    };

    return (
        <div className='bg-gray-700 h-screen flex flex-col items-center justify-center'>
            <div className='bg-white p-8 rounded shadow-md w-96 mt-20'>
                <div className='flex justify-center'>
                    <h1 className='text-2xl font-bold mb-8 text-gray-800'>Crie sua conta e aproveite</h1>
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Usuário:</label>
                    <input className='mt-1 p-2 w-full border rounded-md' type="text" placeholder='Digite o nome de usuário'
                        value={state.username} onChange={(e) => setState((prev) => ({ ...prev, username: e.target.value }))} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Empresa:</label>
                    <input className='mt-1 p-2 w-full border rounded-md' type="text" placeholder='Digite o nome da empresa'
                        value={state.company} onChange={(e) => setState((prev) => ({ ...prev, company: e.target.value }))} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Email:</label>
                    <input className='mt-1 p-2 w-full border rounded-md' type="text" placeholder='Digite o email para cadastro'
                        value={state.email} onChange={(e) => setState((prev) => ({ ...prev, email: e.target.value }))} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Senha:</label>
                    <input className='mt-1 p-2 w-full border rounded-md' type="password" placeholder='Escolha sua senha'
                        value={state.password} onChange={(e) => setState((prev) => ({ ...prev, password: e.target.value }))} />
                </div>
                <button className='w-full bg-blue-500 text-white p-2 mt-5 rounded-md hover:bg-blue-600 transition duration-300' onClick={handleRegister}>Criar conta</button>
            </div>
        </div>
    );
}

export default Register;