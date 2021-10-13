import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Selección del meme */}
      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Fry</option>
        <option value="history">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br />
      {/* Ingreso del texto */}
      <input type="text" placeholder="Linea 1" />
      <br />
      <input type="text" placeholder="Linea 2" />
      <br />
      <button>Exportar imagen</button>
      {/* Generar imagen y texto */}
      <div>
        <span>Linea 1</span>
        <br />
        <span>Linea 2</span>
        <br />
        <img src="/img/fire.jpg" alt="Fire"/>
      </div>
    </div>
  );
}

export default App;