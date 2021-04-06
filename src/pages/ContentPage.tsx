import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AiOutlineFileAdd, AiFillLock, AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import '../styles/pages/contentpage.css'

export default function ContentPage(){
    return(
        <div>
            <Navbar/>
            <div className="content-container">
                <div className="item"><AiOutlineFileAdd/>  Novo conteúdo</div>
                <div className="item"><BiEdit/>  Editar conteúdo</div>
        
                <div className="item"><AiFillLock/>  Privar conteúdo</div>
                <div className="item"><AiFillDelete/>  Remover conteúdo</div>

            </div>
            <Footer/>
        </div>
    )
}