import React,{Component} from 'react'
import Lili from './Liliana.jpeg'
import Raquel from './Raquel.jpeg'
import Izaque from './Izaque.jpeg'
import Img from './iconezinho.png'
import './Texto1.css'

class Desenvolvedores extends Component{
    render(){
        return(
            <div>
                <img id = "topo" src = {Img}/>
                <h1>Desenvolvedores</h1>
                <div>
                    <img id = "imagemDev" src={Izaque} />
                    <p>Um software capaz de permitir<br></br> toda a experiência de um<br></br> Laboratório de Química.</p>
                </div>
                <div>
                    <img id = "imagemDev"src = {Lili} />
                    <p>Um software capaz de permitir<br></br> toda a experiência de um<br></br> Laboratório de Química.</p>
                </div>
                <div>
                    <img id="imagemDev"src= {Raquel}/>
                    <p>Um software capaz de permitir<br></br> toda a experiência de um<br></br> Laboratório de Química.</p>
                </div>
                <p>Siga-nos nas redes sociais</p>
                <p>Voltar ao topo</p>
            </div>
        )
    }
}
export default Desenvolvedores;