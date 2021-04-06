import React from 'react'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../images/arch_logo_preta.png'

import '../styles/pages/registerpage.css'
import { Link } from 'react-router-dom'

export default function SignPage(){

    return (
        <div>
            <Navbar/>
            <form className ="form" >
                <div className="card">
                    <div className="card-top">
                        <img src={Logo} alt=""/>
                        <h2 className="title">Cadastre - se</h2>
                    </div>

                    <div className="card-group">
                        <label>Nome</label>
                        <input type="text"/>
                    </div>
                    <div className="card-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="card-group">
                        <label>Senha</label>
                        <input type="password" /> 
                    </div>

                    <div className="termo-service">
                        <input type="checkbox"/> Aceitar Termos de serviços
                    </div>

                    <div className="card-group">
                        <button type="button" id="confirm">Enviar</button>
                    </div>    
                    <span className="login">Ja é cadastrado? Entre aqui <Link to="/login">Entrar</Link></span> 
            </div>
            </form>
            <Footer/>
        </div>
    )
}