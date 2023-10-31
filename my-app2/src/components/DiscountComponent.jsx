import React, { Component } from "react";
import NavBarComponent3 from "./NavBarComponent3";
import styled from "styled-components";
import { Button } from "react-bootstrap";

class DiscountComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discounts: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/exams/discounts")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();  // <-- Cambia json() a text()
        })
        .then((data) => {
            if (data) {  // <-- Verifica si la respuesta no está vacía
                this.setState({ discounts: JSON.parse(data) });  // <-- Analiza la respuesta
            } 
        })
        .catch((error) => {
            console.log("Error fetching the discounts: ", error);
        });
    }


    //Recorrer toda la lista de discounts e imprimir por consola
    //el rut y el total_price de cada uno de ellos.

    consoleDiscounts() {
        console.log("discounts => " + JSON.stringify(this.state.discounts));
        this.state.discounts.map((discount) => {
            console.log("rut => " + JSON.stringify(discount.rut));
            console.log("total_price => " + JSON.stringify(discount.total_price));
        });
    }

    async calculateDiscounts() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.discounts),
        };
        const response = await fetch(
            "http://localhost:8080/exams/discounts",
            requestOptions
        );
        const data = await response.json();
        this.setState({ discounts: data });
    }



    render() {
        return (
            <div>
                <NavBarComponent3 />
                <Styles>
                    <div className="f">
                        <div className="container">
                            <h1><b>Lista de descuentos</b></h1>
                            {this.state.discounts.length > 0 ? (
                                <table className="table table-striped table-bordered">
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
                                        {this.state.discounts.map((discount, index) => (
                                            <tr key={index}>
                                                <td>{discount[0]}</td>
                                                <td>{discount[1]}</td>
                                                <td>{discount[2]}</td>
                                                <td>{discount[3]}</td>
                                                <td>{discount[4]}</td>
                                                <td>{discount[5]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No hay descuentos registrados.</p>
                            )}
                            {/*Botón para calcular la planilla de descuentos con el tipo PUT */}

                            <Button onClick={this.calculateDiscounts}>Calcular planilla</Button>
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