import React from "react";
import Tarea from "./Tarea";

function Lista({ tareassource }) {
  const tareas = require(tareassource);

  return (
    <div>
      <h1 className="bg-black text-white rounded-xl m-5">Lista de elementos</h1>
      <ul>
        {tareas.map((tarea) => (
          <Tarea key={tarea.id} hora={tarea.hora} completada={tarea.completada}>
            {tarea.tarea}
          </Tarea>
        ))}
      </ul>
    </div>
  );
}
export default Lista;
