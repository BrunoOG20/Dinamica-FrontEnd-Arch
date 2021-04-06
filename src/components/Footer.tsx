import React from 'react'
import { AiTwotonePhone, AiFillMail } from "react-icons/ai";
import {BsFillHouseDoorFill} from 'react-icons/bs'

import '../styles/components/footer.css'

import Logo from '../images/arch_logo.png'

export default function Footer(){
    return (
        <footer className="footer">
            <p><AiTwotonePhone/>  <strong>Telefone:</strong> (11) 2844-2272</p>
            <p><AiFillMail/> <strong>Email:</strong> contato@archoffice.tech</p>
            <p><BsFillHouseDoorFill/> <strong>Endereço:</strong> Av. Marcos Penteado de Ulhoa Rodrigues, 939 Torre Jacarandá - 8° andar - Sala 835 - Tamboré 
                Barueri - SP, 06460-040</p>
            <div className="foto">
                <img src={Logo} alt="logo"/>
                <img src={Logo} alt="logo"/>
                <img src={Logo} alt="logo"/>
            </div>
        </footer>
        
    )
}