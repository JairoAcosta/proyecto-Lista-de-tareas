
import './App.css';
import freecodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freecodeCampLogo}
             className='freecodecamp-logo' />
      </div>
      <di className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </di>
     
    </div>
  );
}

export default App;
