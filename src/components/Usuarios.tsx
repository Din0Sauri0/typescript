import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqres';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef =  useRef(0);

    useEffect(() => {
        //llamada a la API
        cargarUsuario();
    }, [])

    const cargarUsuario = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data)
            paginaRef.current ++;
            console.log(paginaRef.current);
        }else{
            console.log(paginaRef.current);
            alert("No existen mas registros");
        }
        
    }

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={ usuario.id.toString() }>
                <th>
                    <img src={ usuario.avatar } alt={usuario.first_name} style={{
                        width: 35,
                        borderRadius: 100
                    }} />
                </th>
                <th>{ usuario.first_name } { usuario.last_name }</th>
                <th>{ usuario.email }</th>
            </tr>
        );

    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                        {usuarios.map( usuario => renderItem(usuario) )}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={ cargarUsuario }>
                siguiente
            </button>
        </>
    )
}

