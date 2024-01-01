export const UserDirection = ({dir}) =>{

    return(
        <>
            <p>Direccion</p>
            <p>Calle: {dir.street.name}</p>
            <p>Numero: {dir.street.number}</p>
            <p>Ciudad: {dir.city}</p>
            <p>Estado: {dir.state}</p>
        </>
    

    )
}