import React, { useState } from "react";

function Tarea(props) {
  const [terminada, setTerminada] = useState(props.completada);

  function terminarTarea() {
    setTerminada(!terminada);
    console.log(terminada);
  }

  let boton = <button onClick={terminarTarea}>Terminar Tarea</button>;
  let estilo = "text-justify text-blue-500 p-4";
  return (
    <li className={estilo}>
      {!terminada ? props.hora + " : " + props.children + " " : ""}
      {!terminada && boton}
    </li>
  );
}
export default Tarea;
