    export const TaskList=({tasks, setTareas})=>{
    
    let estiloTachado={textDecoration:'line-through'};

    const manejador=(e) =>{  
        const nuevaLista=[ ...tasks];                
            nuevaLista.map((item) => {
                if(Number(item.id)=== Number(e.target.id)){                        
                    item.done=true;                        
                }
            })       
        setTareas(nuevaLista);   
     } 


    return(
      <>            
            
        <h1>Lista de tareas</h1>
        <ul>{
            tasks.map((t)=>{       

                if(t.done){estiloTachado={textDecoration:'line-through'}}
                else{estiloTachado={textDecoration:'none'}}
                return(
                
                        <li key={t.id} style={estiloTachado}>
                        {t.task}
                        
                        <input
                            id={t.id}
                            name={t.task}
                            type="checkbox"
                        
                            checked={t.done}
                             onClick={manejador}
                      />
                      </li>
                    
                
                )
            })}
        </ul>
        </>
        
    )
}