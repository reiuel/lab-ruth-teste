import React,{Component} from 'react'
import Imagem from './iconezinho.png'
import './Texto1.css'

class Justificativa extends Component{
    render(){
        return(
            <div>
                <header>
                    <img id ="topo"src = {Imagem}/>
                </header>
                <h1 id = "just">Mas...por que é importante?</h1>
                <p>O software vigente mostra-se importante pois, através dele, muitos alunos - 
                    especificamente aqueles que frequentam escolas carentes de laboratórios - 
                     podem ter o acesso rápido e gratuito á um laboratório de química.<br></br>
                     O software vigente mostra-se importante pois, através dele, muitos alunos - 
                    especificamente aqueles que frequentam escolas carentes de laboratórios - 
                     podem ter o acesso rápido e gratuito á um laboratório de química.</p>
            </div>
        )
    }
}
export default Justificativa;