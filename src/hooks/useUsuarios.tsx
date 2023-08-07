import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqres';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const useUsuarios = () => {
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
        }else{
            paginaRef.current --;
            alert("No existen mas registros");
        }
        
    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuario();
    }
    
    const paginaAnterior = () => {
        if(paginaRef.current > 0){
            paginaRef.current --;
            cargarUsuario();

        }
    }

    return{
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
