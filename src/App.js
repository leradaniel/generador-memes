import React, { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }
  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  return (
    <div className="App">
      {/* Selección del meme */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Fry</option>
        <option value="history">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br />
      {/* Ingreso del texto */}
      <input type="text" placeholder="Linea 1" onChange={onChangeLinea1} />
      <br />
      <input type="text" placeholder="Linea 2" onChange={onChangeLinea2} />
      <br />
      <button>Exportar imagen</button>
      {/* Generar imagen y texto */}
      <div>
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <br />
        <img src={"/img/"+imagen+".jpg"} alt={imagen}/>
      </div>
    </div>
  );
}

export default App;