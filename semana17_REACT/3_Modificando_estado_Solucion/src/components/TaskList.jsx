import { useState } from "react";
import PropTypes from "prop-types";

export const TaskList = ({ tasks, setTasks }) => {
  let estiloTachado = { textDecoration: "line-through" };

  const [text, setText] = useState("");

  //Funcion manejadora que permite crear una nueva tarea
  const handleAddTask = (event) => {
        event.preventDefault();

        const newTask = {
        id: tasks.length + 1,
        task: text,
        done: false,
        };
        setTasks([newTask, ...tasks]);
        setText('');
  };

  //Funcion que permite tachar una tarea
  const handleTaskCheck = (taskId) => {
        const updateTasks = tasks.map((task)=> {
            if(task.id === taskId){
                //Modificamos la propiedad done de la tarea
                task.done = !task.done;
            }
            return task;
        })

        //Modificamos el array de tareas
        setTasks(updateTasks);
  }
 

  return (
    <>
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map((t) => {
          if (t.done) {
            estiloTachado = { textDecoration: "line-through" };
          } else {
            estiloTachado = { textDecoration: "none" };
          }
          return (
            <li key={t.id} style={estiloTachado}>
              {t.task}

              <input 
                type="checkbox" 
                defaultChecked={t.done} 
                onChange={()=>handleTaskCheck(t.id)}/>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddTask}>
        <label htmlFor="tarea">Añadir tarea</label>
        <input
          type="text"
          maxLength="100"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Añadir</button>
      </form>
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func
};
