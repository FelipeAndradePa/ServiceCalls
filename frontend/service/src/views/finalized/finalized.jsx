import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Title from '../../components/title/title';
import '../../../node_modules/react-paginate/theme/basic/react-paginate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './finalized.css';
import {format} from 'date-fns';
import Modal from '../modal/modal';

const Finalized = () => {

    const [dados, setDados] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [selectedCall, setSelectedCall] = useState(null)
    const itensPorPagina = 10;
    const indiceInicial = paginaAtual * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;
    const dadosPaginados = dados.slice(indiceInicial, indiceFinal);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get('http://localhost:3001/finalized');
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
                    setDados(final);
                }
                else {
                    console.error('Erro ao obter dados: ', result.message)
                }
            } catch (error) {
                console.error('Erro ao obter dados: ', error);
            }
        }

        fetchData();
    }, [])

    const handlePaginaClicada = (dadosPagina) => {
        setPaginaAtual(dadosPagina.selected);
    };

    const openModal = (call) => {
        setSelectedCall(call);
    };

    return (
        <div className='w-full'>
            <div className='font-sans'>
                <Title title='Chamados Finalizados' subtitle='Acompanhe os chamados finalizados' icon='check'></Title>
            </div>
            <div className='my-16'>
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
                    <tbody className='bg-white'>
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
                    pageCount={Math.ceil(dados.length / itensPorPagina)}
                    nextLabel="próximo >"
                    previousLabel="< anterior"
                    pageRangeDisplayed={1}
                    onPageChange={handlePaginaClicada}
                    containerClassName="react-paginate"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default Finalized;
