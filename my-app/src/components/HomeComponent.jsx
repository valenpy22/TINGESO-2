import React, {Component} from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function Home(){
    return (
        <div>
            <GlobalStyle/>
            <HomeStyle>
                <h1 className="text-center"><b>TopEducation</b></h1>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/file-upload">
                        <div class="img-area">
                            <img src="https://img.freepik.com/vector-premium/chat-archivo-documento-texto-comentando-o-editando-documentos-linea-ilustracion-dibujos-animados-plana_101884-838.jpg" alt="Cargar información">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Cargar información</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/students">
                        <div class="img-area">
                            <img src="https://cdn-icons-png.flaticon.com/512/2784/2784403.png" alt="Ver estudiantes">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Ver estudiantes</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/list-fees">
                        <div class="img-area">
                            <img src="https://img.freepik.com/vector-gratis/ingresos-netos-calculando-ilustracion-concepto-abstracto-calculo-sueldos-formula-ingresos-netos-salario-neto-contabilidad-corporativa-calculo-ganancias-estimacion-ganancias_335657-1238.jpg?w=2000" alt="Listar cuotas">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Listar cuotas</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/report-summary">
                        <div class="img-area">
                            <img src="https://previews.123rf.com/images/magurok/magurok1606/magurok160600092/60046224-lado-la-celebraci%C3%B3n-de-solicitud-de-trabajo-aprobado-aprobado-cv-con-el-sello-la-l%C3%ADnea-delgada-plana.jpg" alt="Obtener resumen de pagos">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Obtener resumen de pagos</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/new-student">
                        <div class="img-area">
                            <img src="https://media.istockphoto.com/vectors/agreement-contract-and-offer-color-line-icon-proposal-linear-vector-vector-id1271477227?k=20&m=1271477227&s=612x612&w=0&h=XOSF2ISnfGJZ7bb-fU7rRdDJzTKehDmOF9kcJ5gIEmA=" alt="Ingresar nuevo estudiante">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Ingresar nuevo estudiante</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/generate-fees">
                        <div class="img-area">
                            <img src="https://cdn-icons-png.flaticon.com/512/5669/5669068.png" alt="Generar cuotas">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Generar cuotas</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/payments-sheet">
                        <div class="img-area">
                            <img src="https://cdn-icons-png.flaticon.com/512/2124/2124502.png" alt="Calcular planilla">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Calcular planilla</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/delete-all">
                        <div class="img-area">
                            <img src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="Eliminar todo">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Eliminar todo</strong></span>
                        </div>
                    </div>
                </div>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle
`
    body{
        background-color: #121212;
        font-family: Arial, sans-serif;
    }
`;

const HomeStyle = styled.nav
`
.banner {
      background-color: #0074e4;
      text-align: center;
      padding: 10px;
    }
    .banner h1 {
      color: #ffffff;
      font-size: 50px;
      font-family: 'Roboto Slab', serif; /* Cambia la fuente del título */
    }
    .box-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .single-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      height: auto;
      border-radius: 8px;
      background-color: #292929;
      text-align: center;
      margin: 20px;
      padding: 20px;
      transition: 0.3s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .img-area {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      background-color: #1E1E1E;
      border-radius: 50%;
    }

    .img-area img {
      max-width: 100%;
      height: auto;
    }

    .header-text {
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      color: #ffffff;
      margin-top: 10px;
    }

    .img-text p {
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
      color: #bbbbbb;
      margin-top: 10px;
    }

    .single-box:hover {
      background-color: #0074e4;
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    h1 {
      text-align: center;
      color: #ffffff;
      font-size: 36px;
      margin-top: 20px;
    }

    h6 {
      text-align: center;
      color: #bbbbbb;
      font-size: 14px;
      margin-top: 20px;
    }
`