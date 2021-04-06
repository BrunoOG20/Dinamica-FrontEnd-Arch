import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../images/arch_logo_preta.png'

import '../styles/pages/registerpage.css'


export default function LoginPage(){
    return (
        <div>
            <Navbar/>
            <form className ="form" >
                <div className="card">
                    <div className="card-top">
                        <img src={Logo} alt=""/>
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
                        <input type="checkbox"/> Lembrar senha
                    </div>

                    <div className="card-group">
                        <button type="button" id="confirm">Entrar</button>
                    </div>    
            </div>
            </form>
            <Footer/>
        </div>
    )
}