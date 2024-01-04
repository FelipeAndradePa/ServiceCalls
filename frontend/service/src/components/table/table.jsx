import React from "react";


class Table extends React.Component {
    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Empresa</th>
                        <th>Solicitante</th>
                        <th>Especificação</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    /*código para geração de vária linhas*/
                    <tr>
                        <td>{this.props.id}</td>
                        <td>{this.props.company}</td>
                        <td>{this.props.requester}</td>
                        <td>{this.props.specification}</td>
                        <td>{this.props.status}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}