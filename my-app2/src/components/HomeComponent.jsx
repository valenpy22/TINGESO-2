import React, {Component} from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function Home() {
    return (
        <div>
            <GlobalStyle/>
            <HomeStyle>
                <h1 className="text-center"><b>TopEducation</b></h1>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/file-upload">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Cargar información</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/students">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Ver estudiantes</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/list-fees">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Listar cuotas</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/report-summary">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Obtener resumen de pagos</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/new-student">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Ingresar nuevo estudiante</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/generate-fees">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Generar cuotas</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/discounts">
                        <div class="img-area">
                        </div>
                        </a>
                        <div class="img-text">
                        <span class="header-text"><strong>Calcular planilla</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/delete-all">
                        <div class="img-area">
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

const GlobalStyle = createGlobalStyle`
body {
      background-color: #121212;
      font-family: Arial, sans-serif;
    }
`

const HomeStyle = styled.nav`
.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    color: white;
}

.box-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.single-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: auto;
    border-radius: 4px;
    background-color: white;
    text-align: center;
    margin: 20px;
    padding: 20px;
    transition: .3s
}

.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 6px solid #ddd;
    border-radius: 50%;
    padding: 20px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}

.single-box:nth-child(1) .img-area{
    background-image: url(https://img.freepik.com/vector-premium/chat-archivo-documento-texto-comentando-o-editando-documentos-linea-ilustracion-dibujos-animados-plana_101884-838.jpg)
}

.header-text{
    font-size: 23px;
    font-weight: 500;
    line-height: 48px;
}
.img-text p{
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
}
.single-box:hover{
    background: #e84393;
    color: #fff;}

.single-box:nth-child(2) .img-area{
        background-image: url(https://cdn-icons-png.flaticon.com/512/2784/2784403.png)
}
.single-box:nth-child(3) .img-area{
        background-image: url(https://img.freepik.com/vector-gratis/ingresos-netos-calculando-ilustracion-concepto-abstracto-calculo-sueldos-formula-ingresos-netos-salario-neto-contabilidad-corporativa-calculo-ganancias-estimacion-ganancias_335657-1238.jpg?w=2000)
}
.single-box:nth-child(4) .img-area{
        background-image: url(https://previews.123rf.com/images/magurok/magurok1606/magurok160600092/60046224-lado-la-celebraci%C3%B3n-de-solicitud-de-trabajo-aprobado-aprobado-cv-con-el-sello-la-l%C3%ADnea-delgada-plana.jpg)
}
.single-box:nth-child(5) .img-area{
        background-image: url(https://media.istockphoto.com/vectors/agreement-contract-and-offer-color-line-icon-proposal-linear-vector-vector-id1271477227?k=20&m=1271477227&s=612x612&w=0&h=XOSF2ISnfGJZ7bb-fU7rRdDJzTKehDmOF9kcJ5gIEmA=)
}
.single-box:nth-child(6) .img-area{
    background-image: url(https://cdn-icons-png.flaticon.com/512/5669/5669068.png)
}
.single-box:nth-child(7) .img-area{
    background-image: url(https://cdn-icons-png.flaticon.com/512/2124/2124502.png)
}
.single-box:nth-child(8) .img-area{
    background-image: url(https://cdn-icons-png.flaticon.com/512/3687/3687412.png)
}

.login-box{
    cursor: pointer;
}
`
