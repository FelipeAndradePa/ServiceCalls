import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Title from '../../components/title/title';
import '../../../node_modules/react-paginate/theme/basic/react-paginate.css';
import './new.css';

const New = () => {
    const [paginaAtual, setPaginaAtual] = useState(0);
    const itensPorPagina = 1;
    const dados = [];

    const handlePaginaClicada = (dadosPagina) => {
        setPaginaAtual(dadosPagina.selected);
    };

    const indiceInicial = paginaAtual * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;
    const dadosPaginados = dados.slice(indiceInicial, indiceFinal);

    return (
        <div>
            <div className='font-sans'>
                <Title title='Novos Chamados' subtitle='Acompanhe os novos chamados' icon='plus'></Title>
            </div>
            <div className='my-16'>
                <table className='w-5/6 mb-8 divide-y divide-gray-200'>
                    <thead>
                        <tr>
                            <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Protocolo</th>
                            <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Data</th>
                            <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Hora</th>
                            <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Empresa</th>
                            <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Solicitante</th>
                            <th className='py-3 px-14 text-center text-slate-100 bg-sky-900'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'> 
                        {dadosPaginados.map((item) => (
                            <tr key={item.id}>
                                <th className='py-3 font-medium'>{item.protocolo}</th>
                                <th className='py-3 font-medium'>{item.data}</th>
                                <th className='py-3 font-medium'>{item.hora}</th>
                                <th className='py-3 font-medium'>{item.empresa}</th>
                                <th className='py-3 font-medium'>{item.solicitante}</th>
                                <th className='py-3 font-medium'>{item.status}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default New;
