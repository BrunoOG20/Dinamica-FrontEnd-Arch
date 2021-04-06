import React from 'react'
import Navbar from '../components/Navbar'

import '../styles/pages/notificationspage.css'

import Footer from '../components/Footer'
import sadsmile from '../images/sadsmile.png'

export default function NotificationsPage(){
    return (
        <div>
            <Navbar/>
            <main>
                <h2>Nenhuma notificação até o momento !</h2>
                <img src={sadsmile} alt="eae"/>
                
            </main>
            <Footer/>
        </div>
    )
}