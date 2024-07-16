import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../../../node_modules/react-paginate/theme/basic/react-paginate.css';
import Title from '../../components/title/title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './progress.css';
import {format} from 'date-fns';
import Modal from '../modal/modal';

const Progress = () => {

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
                const response = await axios.get('http://localhost:3001/progress');
                const result = response.data;
                if (result.success) {
                    setDados(result.data);
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
                <Title title='Chamados em Andamento' subtitle='Acompanhe os chamados em andamento' icon='bars-progress'></Title>
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
                                <td className='py-3 text-center font-medium'>{format(new Date(item.data), 'dd/MM/yyyy')}</td>
                                <td className='py-3 text-center font-medium'>{item.hora.slice(0, 5)}</td>
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
    )
}


export default Progress;