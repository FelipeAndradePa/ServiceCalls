import React, { useEffect, useState } from 'react';
import { getToken } from '../../views/login/login';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({element}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false); // Verifica a autenticação
    const [loading, setLoading] = useState(true); // garante que a autenticação seja feita antes que o return seja executado 
    const token = getToken();

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const response = await axios.get('http://localhost:3001/auth', {
            headers: {Authorization: token},
          });
          if(response.status === 200) {
            console.log(response.status);
            setIsAuthenticated(true);
            setLoading(false);
          } else {
            setIsAuthenticated(false);
            setLoading(false);
          }
          
        } catch (error) {
          console.error('Erro na verificação de autenticação:', error);
          setIsAuthenticated(false);
          setLoading(false);
        }
      };
      checkAuthentication();
    }, [token]);
    
    return loading ? null : isAuthenticated ? element : <Navigate to='/' />
};

export default PrivateRoute;
