import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Title from '../../components/title/title';
import '../../../node_modules/react-paginate/theme/basic/react-paginate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './new.css';
import Modal from '../modal/modal';
import axios from 'axios';
import {format} from 'date-fns'

const New = () => {

    // LEMBRAR SEMPRE DE UTILIZAR O ESTADO DO COMPONENTE
    const [dadosOriginais, setDadosOriginais] = useState([]); // criar um setDados para armazenar os dados vindo do backend
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCall, setSelectedCall] = useState(null)
    const itensPorPagina = 10;
    const indiceInicial = paginaAtual * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;
    const dadosPaginados = dadosFiltrados.slice(indiceInicial, indiceFinal);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/new');
                const result = response.data;
                const final = result.data.map((rst) => {
                    const dateObject = new Date(rst.created_at);
                    console.log(dateObject);
                    const hours = dateObject.getUTCHours().toString().padStart(2, '0');
                    const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
                    const formattedTime = `${hours}:${minutes}`;
                    const formattedDate =  dateObject.toISOString().split('T')[0];
                    console.log(formattedTime);
                    console.log(formattedDate);
                    // retorna para resultado rst com as novas propriedades
                    return {
                        ...rst,
                        date: formattedDate,
                        time: formattedTime
                    };
                })
                if (result.success) {
                    setDadosOriginais(final); // utilizar o set dados é melhor que iterar sobre os dados
                    setDadosFiltrados(final);
                } else {
                    console.error('Erro ao obter dados:', result.message);
                }
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        }
        fetchData();
    },[]);

    const handlePage = (dadosPagina) => {
        setPaginaAtual(dadosPagina.selected);
    };

    const handleSearch = (event) => {
        const term = event.target.value; // termo sendo digitado
        setSearchTerm(term);
        const dadosFiltrados = dadosOriginais.filter((item) =>
            item.protocolo.toLowerCase().includes(term.toLowerCase())
        );
        setDadosFiltrados(dadosFiltrados);
        setPaginaAtual(0); // Resetar a página para a primeira ao aplicar o filtro
    };

    const openModal = (call) => {
        setSelectedCall(call);
    }

    return (
        <div className='w-full'>
            <div className='font-sans'>
                <Title title='Novos Chamados' subtitle='Acompanhe os novos chamados' icon='plus'></Title>
            </div>
            <div className='my-16'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Pesquisar o protocolo"
                    className="mb-4 p-2 border rounded-md"
                />
                <table className='w-full mb-8'>
                    <thead>
                        <tr>
                            <th className='py-3 text-center text-slate-100 bg-sky-900'>Protocolo</th>
                            <th className='py-3 text-center text-slate-100 bg-sky-900'>Data</th>
                            <th className='py-3 text-center text-slate-100 bg-sky-900'>Hora</th>
                            <th className='py-3 text-center text-slate-100 bg-sky-900'>Empresa</th>
                            <th className='py-3 text-center text-slate-100 bg-sky-900'>Solicitante</th>
                            <th className='py-3 text-center text-slate-100 bg-sky-900'>Status</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {dadosPaginados.map((item, id) => (
                            <tr key={id} className={id % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className='py-3 text-center font-medium'>{item.protocolo}</td>
                                <td className='py-3 text-center font-medium'>{item.date}</td>
                                <td className='py-3 text-center font-medium'>{item.time}</td>
                                <td className='py-3 text-center font-medium'>{item.empresa}</td>
                                <td className='py-3 text-center font-medium'>{item.solicitante}</td>
                                <td className='py-3 text-center font-medium'>{item.status}</td>
                                <td className='bg-white py-3 text-end font-medium'>
                                    <button className='rounded-full size-6 bg-green-700 text-white' onClick={() => openModal(item)}>
                                       <FontAwesomeIcon icon='plus'/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedCall && <Modal call={selectedCall} onClose={() => setSelectedCall(null)} />}
                <ReactPaginate 
                    className="react-paginate" 
                    pageCount={Math.ceil(dadosFiltrados.length / itensPorPagina)}
                    nextLabel="próximo >"
                    previousLabel="< anterior"
                    pageRangeDisplayed={1}
                    onPageChange={handlePage}
                    containerClassName="react-paginate"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default New;
