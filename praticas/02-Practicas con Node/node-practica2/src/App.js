import './App.css';
import Coche from './Componentes/coche';

function App() {
  return (
    <div className="App">
      <Coche matricula="Matricula1" precio={1000}/>
    </div>
  );
}

export default App;
