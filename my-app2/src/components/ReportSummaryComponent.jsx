import React, { Component } from "react";
import NavBarComponent3 from "./NavBarComponent3";
import styled from "styled-components";
import { Button } from "react-bootstrap";

class ReportSummaryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reportSummaries: [],
        };
    }
    componentDidMount() {
        fetch("http://localhost:8080/exams/report-summaries")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();  // <-- Cambia json() a text()
        })
        .then((data) => {
            if (data) {  // <-- Verifica si la respuesta no está vacía
                this.setState({ reportSummaries: JSON.parse(data) });  // <-- Analiza la respuesta
            } 
        })
        .catch((error) => {
            console.log("Error fetching the discounts: ", error);
        });
    }

    async calculateReportSummaries() {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.reportSummaries),
        };
        const response = await fetch(
            "http://localhost:8080/exams/report-summaries",
            requestOptions
        );
        const data = await response.json();
        this.setState({ reportSummaries: data });
    }

    render(){
        return (
            <div>
                <NavBarComponent3 />
                <Styles>
                    <div className = "f">
                        <div className = "container">
                            <h1><b>Resumen de pagos</b></h1>
                            {this.state.reportSummaries.length > 0 ? (
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Rut</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Método de pago</th>
                                            <th>N° de exámenes</th>
                                            <th>Puntaje promedio</th>
                                            <th>N° de cuotas</th>
                                            <th>N° de cuotas pagadas</th>
                                            <th>N° de cuotas atrasadas</th>
                                            <th>Total pagado</th>
                                            <th>Total deuda</th>
                                            <th>Último pago</th>
                                            <th>Precio final</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.reportSummaries.map((reportSummary, index) => (
                                            <tr key={index}> {reportSummary}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No hay resúmenes de pagos registrados.</p>
                            )}
                            {/* Botón para calcular resumenes de pagos*/}
                            <Button onClick={this.calculateReportSummaries}>Calcular resumen</Button>
                        </div>
                    </div>
                </Styles>
            </div>
        );
    }
}

export default ReportSummaryComponent;

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