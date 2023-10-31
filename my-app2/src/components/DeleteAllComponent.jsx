import React, {Component} from "react";
import styled from "styled-components";
import NavBarComponent3 from "./NavBarComponent3";

class DeleteAllComponent extends Component {
    handleDelete = () => {
        fetch("http://localhost:8080/students/delete-all", {
            method: "DELETE",
        }).then(() => {
            window.location.reload(false);
        });

        fetch("http://localhost:8080/exams/delete-all", {
            method: "DELETE",
        }).then(() => {
            window.location.reload(false);
        });

        fetch("http://localhost:8080/fees/delete-all", {
            method: "DELETE",
        }).then(() => {
            window.location.reload(false);
        });

    }

    render(){
        return(
            <div>
                <NavBarComponent3/>
                <h1>Eliminar todos los datos</h1>
                <button className="btn btn-danger" onClick={this.handleDelete}>Eliminar todos los datos</button>
            </div>
        );
    }
}

export default DeleteAllComponent;