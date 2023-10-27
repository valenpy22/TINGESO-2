import React, {useState} from "react";
import styled from "styled-components";
import FileUploadService from "../services/FileUploadService";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

export default function StudentComponent(props){
    const initialState = {
        rut: "",
        names: "",
        surnames: "",
        birthday: "",
        school_type: "",
        school_name: "",
        senior_year: ""
    };

    const [input, setInput] = useState(initialState);

    const changeRutHandler = (event) => {
        setInput({...input, rut: event.target.value});
        console.log(input);
    };

    const changeNamesHandler = (event) => {
        setInput({...input, names: event.target.value});
        console.log(input);
    };

    const changeSurnamesHandler = (event) => {
        setInput({...input, surnames: event.target.value});
        console.log(input);
    };

    const changeBirthdayHandler = (event) => {
        setInput({...input, birthday: event.target.value});
        console.log(input);
    };

    const changeSchoolTypeHandler = (event) => {
        setInput({...input, school_type: event.target.value});
        console.log(input);
    };

    const changeSchoolNameHandler = (event) => {
        setInput({...input, school_name: event.target.value});
        console.log(input);
    };

    const changeSeniorYearHandler = (event) => {
        setInput({...input, senior_year: event.target.value});
        console.log(input);
    };

    const saveStudent = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea registrar este estudiante?",
            text: "Una vez ingresado, no podrá ser eliminado",
            icon: "warning",
            buttons: ["Cancelar", "Registrar"],
            dangerMode: true,
        }).then(respuesta=>{
            if(respuesta){
                swal("El estudiante ha sido registrado", {icon: "success", buttons: false});
                let student = {rut: input.rut, names: input.names, surnames: input.surnames, birthday: input.birthday, school_type: input.school_type, school_name: input.school_name, senior_year: input.senior_year};
                console.log(input.rut);
                console.log(input.names);
                console.log(input.surnames);
                console.log(input.birthday);
                console.log(input.school_type);
                console.log(input.school_name);
                console.log(input.senior_year);
                console.log("student => " + JSON.stringify(student));
                StudentService.saveStudent(student).then((res) => {});
            }else{
                swal({text: "El estudiante no ha sido registrado", icon: "error"});
            }
        });
    }
}