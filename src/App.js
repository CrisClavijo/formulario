import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";       
import Formulario from './components/formulario';                         
function App() {
  return (
    <div className="App">
      <h1>Formulario</h1>
      <Formulario/>
    </div>
  );
}

export default App;
