
import './index.css';
import Menu from './componentes/Menu';
import Texto1 from './componentes/Texto1.js'
import Justificativa from './componentes/Justificativa'
import Tecnologia from "./componentes/Tecnologias"
import Desenvolvedores from './componentes/Desenvolvedores';

export default function App() {
  return (
    <div className='App'>
      <Menu></Menu>
      <Texto1></Texto1>
      <Justificativa></Justificativa>
      <Tecnologia></Tecnologia>
      <Desenvolvedores></Desenvolvedores>
    </div>
  );
}
