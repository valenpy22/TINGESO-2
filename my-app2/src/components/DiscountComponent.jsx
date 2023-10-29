import React, { Component } from "react";
import NavBarComponent3 from "./NavBarComponent3";
import styled from "styled-components";

class DiscountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discounts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/discounts")
            .then((response) => response.json())
            .then((data) => this.setState({ discounts: data }));
    }

    render() {
        return (
            <div>
                <NavBarComponent3 />
                <Styles>
                    <div class="f">
                        <div class="container">
                            <h1><b>Lista de descuentos</b></h1>
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Rut</th>
                                        <th>Descuento tipo de colegio</th>
                                        <th>Descuento año de egreso</th>
                                        <th>Descuento puntaje promedio</th>
                                        <th>Intereses meses de atraso</th>
                                        <th>Valor total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.discounts.map((discount) => (
                                        <tr key={discount.rut}>
                                            <td>{discount.rut}</td>
                                            <td>{discount.discount_type_school}</td>
                                            <td>{discount.discount_senior_year}</td>
                                            <td>{discount.discount_average_score}</td>
                                            <td>{discount.interest_months_late}</td>
                                            <td>{discount.total_price}</td>
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

export default DiscountComponent;

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