import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/logo.png';

const getToken = () => localStorage.getItem('token');
const setToken = (token) => localStorage.setItem('token', token);
const removeToken = () => localStorage.removeItem('token');

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        username: '',
        password: '',
        token: '',
        data: ''
    });

    const handleLogin = async () => {
        const { username, password } = state;

        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            setState((prev) => ({ ...prev, token: response.data.token }));
            console.log(response.data.token);
            setToken(response.data.token)
            navigate('/content');
        } catch (error) {
            console.error('Erro ao fazer login: ', error.response.data.error);
        }
    };

    return (
        <div className='bg-gray-700 h-screen flex flex-col items-center justify-center'>
            <div className='flex justify-center '>
                <img src={img} alt="Techline" className='w-2/6'/>
            </div>
            <div className='bg-white p-8 rounded shadow-md w-96 mt-20'>
                <h1 className='text-2xl font-bold mb-8 text-gray-800'>Autenticação de usuário</h1>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Usuário:</label>
                    <input className='mt-1 p-2 w-full border rounded-md' type="text" value={state.username} onChange={(e) => setState((prev) => ({ ...prev, username: e.target.value }))} />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Senha:</label>
                    <input className='mt-1 p-2 w-full border rounded-md' type="password" value={state.password} onChange={(e) => setState((prev) => ({ ...prev, password: e.target.value }))} />
                </div>
                <button className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300' onClick={handleLogin}>Entrar</button>
            </div>
        </div>
    );
}

export { setToken, getToken, removeToken };
export default Login;


