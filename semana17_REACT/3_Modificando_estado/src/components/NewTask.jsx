import { useState } from "react";

export const NewTask= ({tasks, setTareas}) => {


const [newTask, setnewTask]= useState("");
    return(
    <>    
        <form onSubmit={(e)=>{

            const nuevaTarea= {
                id:tasks.length +1,
                task: e.target.elements.tarea.value,
                done: false        
                }
            const nuevaLista=[nuevaTarea, ...tasks];
            console.log(nuevaLista);
            setTareas(nuevaLista);

            e.preventDefault();
            }}
          >
          <label htmlFor="tarea">Añadir tarea</label>
          <input type="text" id="tarea" name="tarea"  value={newTask} onChange={(e)=> setnewTask(e.target.value)} />
          
          <button type="submit" >Añadir</button>
        </form>

    </> 
    )
}


