import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AiOutlineFileAdd, AiFillLock, AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

import '../styles/pages/manutencaoeventpage.css'

export default function ManutencaoEvent(){
    return(
        <div>
            <Navbar/>
            <div className="content-container">
                <div className="item"><AiOutlineFileAdd/>  Criar Evento</div>
                <div className="item"><BiEdit/>  Editar evento</div>
        
                <div className="item"><AiFillLock/>  Privar evento</div>
                <div className="item"><AiFillDelete/>  Remover evento</div>

            </div>
            <Footer/>
        </div>
    )
}