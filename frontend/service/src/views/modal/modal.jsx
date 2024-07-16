import React from 'react';
import './modal.css';
import {format} from 'date-fns';
import axios from 'axios';

const alterState = async (protocol, status) => {
    try {
        var newState = '';
        if(status === 'Novo') {
            newState = 'Em andamento';
            const response = await axios.patch(`http://localhost:3001/alterState/${protocol}`, {newState});    
        }
        else {
            newState = 'Finalizado';
            const response = await axios.patch(`http://localhost:3001/alterState/${protocol}`, {newState});  
        }      
        console.log('Status atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar o status:', error);
    }
};

const modal = ({ call, onClose }) => {
    return (
        <div className='modal-overlay'>
            <div className="modal">
                <div className='flex flex-row justify-end'>
                    <button className="close" onClick={onClose}>
                        &times;
                    </button> 
                </div>
                <div className="modal-content">
                    <h2 className='font-bold text-xl text-center'>Detalhes do Chamado</h2>
                    <p className='mt-5'>Protocolo: {call.protocolo}</p>
                    <p>Data: {format(new Date(call.data), 'dd/MM/yyyy')}</p>
                    <p>Hora: {call.hora.slice(0,5)}</p>
                    <p>Empresa: {call.empresa}</p>
                    <p>Solicitante: {call.solicitante}</p>
                    <p>Status: {call.status}</p>
                    <div className='flex justify-center mt-6'>
                        <button className='bSubmit w-36 h-10 rounded-md' onClick={() => alterState(call.protocolo, call.status)}>
                            Alterar status
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default modal;