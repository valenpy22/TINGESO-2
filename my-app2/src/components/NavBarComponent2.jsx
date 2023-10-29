import React from "react";
import styled from "styled-components";

function NavBarComponent2(){
    return(
        <>
        <NavStyle>
            <header class="header">
                <div class="logo">
                    <h1>TopEducation</h1>
                </div>
                <nav>
                    <a class="btn" href="/"><button>Volver al menú</button></a>
                    <a class="btn-2" href="/list-students"><button>Ver estudiantes</button></a>
                </nav>
            </header>
        </NavStyle>
        </>
    )
}

export default NavBarComponent2;

const NavStyle = styled.nav`
.header{
    background-color: #3D30A2;
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
    margin-right: 0px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #ffffff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
.header .btn button:hover{
    background-color: #ffffff;
    color: #0f0f0f;
    transform: scale(1.1);
  }
.header .btn-2 button {
    margin-right: 0px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #ffffff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
  }
.header .btn-2 button:hover{
    background-color: #ffffff;
    color: #0f0f0f;
    transform: scale(1.1);
}
`