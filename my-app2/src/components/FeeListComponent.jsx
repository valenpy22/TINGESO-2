import React, { Component } from "react";
import NavBarComponent1 from "./NavBarComponent1";
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
                <NavBarComponent1 />
                <Styles>
                    <div class="f">
                        <div class="container">
                            <h1><b>Lista de cuotas</b></h1>
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Rut</th>
                                        <th>Fecha</th>
                                        <th>Monto</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.fees.map((fee) => (
                                        <tr key={fee.id}>
                                            <td>{fee.date}</td>
                                            <td>{fee.amount}</td>
                                            <td>{fee.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Styles>
            </div>
        );
    }
}
