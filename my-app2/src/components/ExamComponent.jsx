import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarComponent1 from "./NavBarComponent1";

import ExamService from "../services/ExamService";
import styled from "styled-components";
import swal from 'sweetalert';

class ExamComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            file: null,
        };
        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(e) {
        this.setState({ file: e.target.files[0] });
    }

    onFileUpload = () => {

        if(this.state.fule && this.state.file.name !== "students_exams.csv"){
            swal("Nombre de archivo incorrecto", "El nombre del archivo debe ser 'students_exams.csv'", "error");
            return;
        }

        swal({
            title: "¿Está seguro de que desea cargar el archivo csv?",
            text: "El nombre debe ser 'students_exams.csv', de lo contrario no se cargará",
            icon: "warning",
            buttons: ["Cancelar", "Cargar"],
            dangerMode: true,
        }).then(respuesta => {
            if(respuesta){
                const formData = new FormData();
            formData.append("file", this.state.file);
            
            ExamService.uploadFile(formData)
                .then((res) => {
                    console.log(res);
                    if (res.data === "Bien") {
                        swal("Archivo cargado correctamente", {
                            icon: "success",
                            timer: "2000",
                        });
                    }else{
                        swal("Error al cargar el archivo", res.data.message || "Hubo un error", "error");
                    }
                })
                .catch((error) => {
                    swal("Error al cargar el archivo", "Hubo un error", "error");
                });
        }else{
            swal("Archivo no cargado", {
                icon: "error",
                timer: "2000",
            });
        }
    });
    };

    render(){
        return (
            <div className="home">
                <NavBarComponent1/>
                <Styles>
                    <div className="f">
                        <div className="container">
                        <h1><b>Cargar el archivo de datos</b></h1>
                        <Row className="mt-4">
                            <Col col="12">
                            <Form.Group className="mb-3" controlId="formFileLg">
                                <Form.Control type="file" size="lg" onChange={this.onFileChange} />
                            </Form.Group>
                            <Button variant="primary" onClick={this.onFileUpload}>
                                Cargar el archivo a la Base de Datos</Button>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    <br>
                    </br>
                    <hr>
                    </hr>
                    <div className="form1">
                        <h5><b>Recuerde que el nombre del archivo debe ser "students_exams.csv"</b></h5>
                    </div>
                </Styles>
          </div>
        )
    }
}

export default ExamComponent;

const Styles = styled.div`
.container{
    font-family: Cantarell,sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2%;
}
.f{
    font-family: Cantarell,sans-serif;
    margin-top: 40px;
    border: 1px solid rgb(0, 0, 0, 0.1);
    padding: 40px;
    padding-top: 10px;
    border-radius: 40px;
    margin-left: 300px;
    margin-right: 300px;
}
@media(max-width: 1200px){
    .f{margin-left: 200px;
        margin-right: 200px;}
}
.header{
    font-family: Cantarell,sans-serif;
    background-color: #1b3039;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
}
.header .logo{
    margin-right: auto;
    color: white;
    font-family: 'Pacifico',serif;
}
.header .btn button{
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.header .btn button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
.header .btn-2 button {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.header .btn-2 button:hover{
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
.form1{
    font-family: Cantarell,sans-serif;
    border: 1px solid rgb(0, 0, 0, 0.1);
    padding: 30px;
    border-radius: 30px;
    margin-left: 300px;
    margin-right: 300px;
    text-align: center;
}
`