import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { NewTask } from "./components/NewTask";

const App = () => {

  const [tareas, setTareas] = useState([
          {
          id: 1,
          task: 'Ir a la compra',
          done: false
        },
        {
          id: 2,
          task: 'Hacer ejercicios de react',
          done: true
        }]);

      
  return (
    <>
      <TaskList tasks={tareas} setTareas={setTareas} />   
      <NewTask tasks={tareas} setTareas={setTareas}/>
    
    </>
  )
}

export default App
