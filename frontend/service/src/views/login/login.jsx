import React from 'react';
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: '',
            data: '',
        }
    }

    handleLogin = async () => {
        const {username, password} = this.state;

        try {
            const response = await axios.post('http://localhost:3001/login', {username, password});
            this.setState({ token: response.data.token });
        } catch (error) {
            console.error('Erro ao fazer login: ', error.response.data.error);
        }
    }

    fetchData = async () => {
        const {token} = this.state;

        try {
            const response = await axios.get('http://localhost:3001/data', {headers: { Authorization: token },});
            this.setState({ data: response.data.data})
        } catch (error) {
            console.error('Erro ao obter dados:', error.response.data.error);
        }
    }

    render() {
        <div>
            <h1>Autenticação JWT</h1>
            <div>
                <label>Usuário:</label>
                <input type="text" value={username} onChange={(e) => this.setState({ username: e.target.value })} />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
            </div>
            <button onClick={this.handleLogin}>Login</button>

            {token && (
                <div>
                    <p>Token: {token}</p>
                    <button onClick={this.fetchData}>Obter Dados Protegidos</button>
                    {data && <p>Dados Protegidos: {data}</p>}
                </div>
            )}
      </div>
    }
    
}

export default Login;