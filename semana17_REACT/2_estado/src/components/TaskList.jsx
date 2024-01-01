
export const TaskList = ({tasks}) => {
    
    let estiloTachado={textDecoration:'line-through'};
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
                    </li>
                )
            })}
        </ul>
        </>
        
    )
}
