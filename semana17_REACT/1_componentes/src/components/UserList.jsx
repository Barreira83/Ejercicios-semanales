
import PropTypes from "prop-types";
 import { User } from './User'

export const UserList =({usuarios}) => {

    return (
        <>
        <p>Listado de usuarios</p>        
        <ul>
            {usuarios.map((user)=>{                    
            return(
                <li key={user.email}>
                     <User 
                        foto={user.picture} 
                        nombre={user.name}
                        direccion={user.location}
                        edad={user.dob.age}
                     />                    
                </li>                
            )})
            }
        </ul> 
        </>
)
}


UserList.propTypes = {
    usuarios: PropTypes.array,
  };