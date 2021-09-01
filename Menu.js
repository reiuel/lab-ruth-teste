import React,{Component} from 'react'
import './Menu.css'
import logoLab from './logoLab.png'

 class Menu extends Component{
    render(){
        return(
            <div className="menu">
                <header>
                    <nav>
                    <li><img id = "imagem" src  = {logoLab}/></li>
                    <ul>
                        
                        <li><a id = "home"href="home">HOME</a></li>
                        <li><a id = "acesso"href="acesso">ACESSO VIP</a></li>
                        <li><a id = "contato"href="contato">CONTATO</a></li>
                       
                    </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Menu;