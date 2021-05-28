import './App.css';
import imagemprincipal from "./imagem/imagem-principal.svg"
import Button  from './componentes/button';

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="formulario">
          <h1 className="titulo">Faça o seu Cadastro</h1>
          <Button text="CONFIMAR"></Button>
          <Button text="CANCELAR"></Button>
        </div>
        <div className="imagem">
          <img src={imagemprincipal}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
