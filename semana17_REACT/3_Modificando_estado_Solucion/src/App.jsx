import { useState } from "react";
import { TaskList } from "./components/TaskList";


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
      <TaskList tasks={tareas}  setTasks={setTareas}/>   
  
    
    </>
  )
}

export default App
