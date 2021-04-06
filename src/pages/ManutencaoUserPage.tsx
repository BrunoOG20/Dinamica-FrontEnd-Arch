import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { AiFillEdit } from 'react-icons/ai'

import '../styles/pages/manutencaouserpage.css'

export default function AdminPage(){
    return(
        <div>
            <Navbar/>
            <h2>Lista de Usuários</h2>
            <div className="linha"></div>
            <table>
            <tr>
                <th>ID</th>
                <th>Usuário</th>
                <th>Email</th> 
                <th>Status</th>
                <th>Editar</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Arch User</td>
                <td>contato@archoffice.tech </td>
                <td><span className="online">ONLINE</span></td>
                <td><AiFillEdit/></td>    
            </tr>
            <tr>
                <td>2</td>
                <td>Arch User</td>
                <td>contato@archoffice.tech </td>
                <td><span className="online">ONLINE</span></td>
                <td><AiFillEdit/></td>    
            </tr>
            <tr>
                <td>3</td>
                <td>Arch User</td>
                <td>contato@archoffice.tech </td>
                <td><span className="offline">OFFLINE</span></td>
                <td><AiFillEdit/></td>    
            </tr>
            </table>

            <Footer/>
        </div>
    )
}