import PropTypes from "prop-types";
import { UserPicture } from "./UserPicture";
import { UserName } from "./UserName";
import { UserDirection } from "./UserDirection";
import { UserMarca } from "./UserMarca";




export const User = ({foto, nombre, direccion, edad}) => {
    return(
        <>
            <UserPicture foto={foto.large} alt={nombre.first}/>          
            <UserName name={nombre}/>
            <UserDirection dir={direccion}/> 
            <div style={{color:'red', fontSize:'2rem'}}>{edad>=18 && <UserMarca/>}
            </div>
        </>
    
    )
}

User.propTypes = {
    foto: PropTypes.object,
    nombre: PropTypes.object,
    direccion: PropTypes.object
  };