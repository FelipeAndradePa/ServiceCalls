import React from 'react';
import ReactPaginate from 'react-paginate';
import '../../../node_modules/react-paginate/theme/basic/react-paginate.css';
import Title from '../../components/title/title';
import './progress.css';

class Progress extends React.Component {

    constructor(props) {
        super(props); // relacionado a herança de classes
        this.state = {
          paginaAtual: 0,
          itensPorPagina: 1,
          dados: [
            {id: 1, protocolo: '2024010821330', data: '08/01/2024', hora: '21:40', empresa: 'Techline', solicitante: 'Felipe Andrade', status: 'Não atendido'},
            {id: 2, protocolo: '2024010821330', data: '08/01/2024', hora: '21:41', empresa: 'Techline', solicitante: 'Felipe Andrade', status: 'Não atendido'},
            {id: 3, protocolo: '2024010821330', data: '08/01/2024', hora: '21:42', empresa: 'Techline', solicitante: 'Felipe Andrade', status: 'Não atendido'}
          ],
        };
      }
    
    handlePaginaClicada = (dadosPagina) => {
        this.setState({ paginaAtual: dadosPagina.selected });
      };
    
    render() {

        const dados = this.state.dados;
        const itensPorPagina = this.state.itensPorPagina;
        const paginaAtual = this.state.paginaAtual;

        const indiceInicial = paginaAtual * itensPorPagina;
        const indiceFinal = indiceInicial + itensPorPagina;
        const dadosPaginados = dados.slice(indiceInicial, indiceFinal);

        return(
            <div>
                <div className='font-sans'>
                    <Title title='Chamados em Andamento' subtitle='Acompanhe os chamados em andamento' icon='bars-progress'></Title>
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
                        onPageChange={this.handlePaginaClicada}
                        containerClassName="react-paginate"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        )
    }
}

export default Progress;