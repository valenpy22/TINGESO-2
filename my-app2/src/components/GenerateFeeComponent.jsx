import React, {useState} from "react";
import NavBarComponent2 from "./NavBarComponent2";
import styled from "styled-components";
import FeeService from "../services/FeeService";
import StudentService from "../services/StudentService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

export default function GenerateFeeComponent(props){
    const initialState = {
        rut: "",
        number_of_fees: "",
    }

    const [input, setInput] = useState(initialState);

    const changeRutHandler = (event) => {
        setInput({...input, rut: event.target.value});
        console.log(input.rut);
    };

    const changeNumberOfFeesHandler = (event) => {
        setInput({...input, number_of_fees: event.target.value});
        console.log(input.number_of_fees);
    };

    const generateFees = (e) => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea generar estas cuotas al estudiante?",
            text: "Una vez registrado, no podrá eliminarlo",
            icon: "warning",
            buttons: ["Cancelar", "Generar"],
            dangerMode: true,
        }).then(respuesta => {
            if(respuesta){
                swal("Cuotas generadas correctamente",
                {
                    icon: "success",
                    timer: "2000",
                });
                let fees_generated = {
                    rut: input.rut,
                    number_of_fees: input.number_of_fees,
                };
                
                console.log("fees_generated => " + JSON.stringify(fees_generated));
                StudentService.setMaxNumberOfFees(input.rut, input.number_of_fees).then((res) => {
                    props.history.push("/generate-fees");
                });

                StudentService.getStudentByRut(input.rut).then((res) => {
                    let student = res.data;
                    console.log("student => " + JSON.stringify(student));
                    let max_number_of_fees = student.number_of_fees;
                    console.log("max_number_of_fees => " + JSON.stringify(max_number_of_fees));
                    FeeService.generateFees(input.rut, max_number_of_fees).then((res) => {
                        props.history.push("/generate-fees");
                    }
                    );
                });

            
            }else{
                swal("Cuotas no generadas", {
                    icon: "error",
                    timer: "2000",
                });
            }
        });
    };

    return(
        <Styles>
            <div className="home">
                <NavBarComponent2 />
                <div className="mainclass">
                    <div className="form1">
                        <h1 className="text-center"><b>Generar cuotas a estudiante</b></h1>
                        <div className="formcontainer">
                            <hr></hr>
                            <div className="container">
                                <Form>
                                    <Form.Group className="mb-3" controlId="rut" value = {input.rut} onChange={changeRutHandler}>
                                        <Form.Label>Rut</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese el rut del estudiante. Ej: 12345689-1" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="number_of_fees" value = {input.number_of_fees} onChange={changeNumberOfFeesHandler}>
                                        <Form.Label>Número de cuotas</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese el número de cuotas que desea generar" />
                                    </Form.Group>
                                </Form>
                            </div>
                            <Button className="boton" onClick={generateFees}>Generar cuotas</Button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </Styles>
    )
}

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

.home{
    background-color: #ffffff;
    margin: 0;
    padding: 0;
}

.mainclass{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
}

.form1{
    background-color: #f0f0f0;
    width: 50%;
    padding: 40px;
}

input[type=rut], input[type=date], input[type=text], select, textarea {
    width: 100%;
    padding: 8px 8px;
    margin: 0px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

Button {
    color: white;
    padding: 14px 0;
    margin: 10px 0;
    border: none;
    cursor: grabbing;
    width: 100%;
}

Button:hover {
    opacity: 0.8;
}

.formcontainer {
    text-align: left;
    margin: 24px 100px 9px;
}

.container {
    padding: 24px 0;
    text-align:left;
}

span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
}

.boton {
    background-color: #7752FE;
}
`