import React,{Component} from 'react'
import Csharp from './csharplogo.png'
import Unity from './Unity-Logo-White.png'
import Meta from './metahumanlogo.jpg'
import Blender from './blenderlogo.png'
import Card from './imgcardboard.png'
import Img from './iconezinho.png'
import './Texto1.css'

class Tecnologia extends Component{
    render(){
        return(
            <div>
                <img id = "topo" src = {Img}/>
                <h1 id ="tecnologia">Tecnologias Utilizadas</h1>
                <div id>
                <div>
                    <img src = {Meta}/>
                    <p>MetaHuman Creator: uma ferramenta <br></br>utilizada para a criação de personagens 
                    <br></br>ultrarrealistas em 3D.<br></br> </p>
                </div>
                <div>
                    <img src = {Unity}/>
                    <p>Unity: plataforma voltada especificamente para o desenvolvimento de jogos</p>
                </div>
                <div>
                    <img src ={Csharp}/>
                    <p>C#: linguagem de programação linguagem moderna, simples e orientada a objetos.</p>
                </div>
                <div>
                    <img src = {Card}/>
                    <p>Google Cardboard: instrumento desenvolvido pela Google -que possibilita ao
                         usuário uma experiência em Realidade Virtual (VR) com a visualização de foto, vídeos e animações.</p>
                </div>
                <div>
                    <img src = {Blender}/>
                    <p>Blender: software open source gratuito voltado para a criação de elementos, animações e jogos em 3D</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Tecnologia;