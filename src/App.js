import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    //Se ubica el div con id "meme" para convertirlo en una imagen:
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      //Ubicación de la imagen generada:
      let img = canvas.toDataURL("image/png");
      //Para descargar, se crea un elemento de tipo hipervínculo:
      let link = document.createElement("a");
      //Se le da un nombre a la descarga:
      link.download = "meme.png";
      //Se crea el vínculo a la descarga, que está en la ubicación de la imagen generada:
      link.href = img;
      //Se simula un click para iniciar la descarga:
      link.click();
    });
  };

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
      <button onClick={onClickExportar}>Exportar imagen</button>
      {/* Generar imagen y texto */}
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <br />
        <img src={"/img/" + imagen + ".jpg"} alt={imagen} />
      </div>
    </div>
  );
}

export default App;
