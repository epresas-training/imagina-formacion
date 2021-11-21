import React, { useState, useEffect, useRef, createRef } from "react";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const counter = useRef(0);
  const nameRef = createRef();
  const lastNameRef = createRef();

  useEffect(() => {
    counter.current = counter.current + 1;
  });

  const handleClick = (event) => {
    setResult(Math.random() + "");
  };

  const handleKeypress = (event) => {
    if (event.charCode === 13) {
      alert("Se ha pulsado la tecla ENTER");
    }
  };

  const handleMouseIn = (event) => {
    console.log("Entra el ratón", event);
  };

  const handleMouseOut = (event) => {
    console.log("Sale el ratón", event);
  };

  const handleClickMouse = (event) => {
    console.log(`El usuario pulsa en x: ${event.clientX}, y: ${event.clientY}`);
  };

  const handleTouch = (event) => {
    console.log("El tipo de este evento es: ", event.type);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario en React</h1>
        <button onClick={handleClick}>Mostrar datos</button>
        <strong>{result}</strong>
        <div>
          <input
            placeholder="Nombre"
            ref={nameRef}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Apellido"
            ref={lastNameRef}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>El componente se ha renderizado: {counter.current}</div>
        <hr />
        <input placeholder="Se lanzará alerta" onKeyPress={handleKeypress} />
        <input placeholder="No se lanzará alerta" />
        <hr />
        <button
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseOut}
          onClick={handleClickMouse}
        >
          Pruebas con Eventos de ratón
        </button>
        <hr />
        <button onTouchStart={handleTouch} onClick={handleTouch}>
          Púlsame
        </button>
      </header>
    </div>
  );
}

export default App;
