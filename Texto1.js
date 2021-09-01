import React, { Component } from 'react'
import './Texto1.css'
import ImagemMeio from './ImagemMeioLab.png'

class Texto1 extends Component{
    render(){
        return(
            <div>
                <div id = "texto">
                    <h1>Laboratório<br></br> Ruth</h1>
                    <p>Um software capaz de permitir toda a <br></br>experiência de um Laboratório de Química. <br></br>
                    Nosso projeto, através da Realidade Virtual, <br></br>tem por objetivo ensinar, da melhor forma<br></br> 
                    possível, a química do ensino médio.</p>
                </div>
                <div>
                <img id = "imagem1" src ={ImagemMeio}/>
                </div>
            </div>
        )
    }
}
export default Texto1;