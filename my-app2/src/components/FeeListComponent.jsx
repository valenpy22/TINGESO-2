import React, { Component } from "react";
import NavBarComponent3 from "./NavBarComponent3";
import styled from "styled-components";

class FeeListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fees: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/fees")
            .then((response) => response.json())
            .then((data) => this.setState({ fees: data }));
    }

    render() {
        return (
            <div>
                <NavBarComponent3 />
                <Styles>
                    <div className="f">
                        <div className="container">
                            <h1><b>Lista de cuotas</b></h1>
                            {this.state.fees.length > 0 ? (
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Rut</th>
                                            <th>N° de cuota</th>
                                            <th>Precio</th>
                                            <th>Fecha de pago</th>
                                            <th>Máxima fecha de pago</th>
                                            <th>Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.fees.map((fee) => (
                                            <tr key={fee.id}>
                                                <td>{fee.rut}</td>
                                                <td>{fee.number_of_fee}</td>
                                                <td>{fee.price}</td>
                                                <td>{fee.payment_date}</td>
                                                <td>{fee.max_date_payment}</td>
                                                <td>{fee.state}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No hay cuotas registradas.</p>
                            )}
                        </div>
                    </div>
                </Styles>
            </div>
        );
    }
}

export default FeeListComponent;

const Styles = styled.div`
.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
}

.f{
    justify-content: center;
    align-items: center;
    display: flex;
}
*{
    font-family: sans-serif;
    box-sizing: content-box;
    margin: 0;
    padding: 0;
}
.content-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.8em;
    min-width: 200px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: 4%;
    margin-right: 4%;
}
.content-table thead tr{
    background-color: #009879;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
}
.content-table th,
.content-table td{
    padding: 12px 15px;
    text-align: center;
}
.content-table tbody tr{
    border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even){
    background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type{
    border-bottom: 2px solid #009879;
}
.content-table tbody tr.active-row{
    font-weight: bold;
    color: #009879;
}
`