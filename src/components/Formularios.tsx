import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const Formularios = () => {

    const { formulario, email, password, onChange }  = useForm({
        email: 'test@gmail.com',
        password: '123456'
    });
    

  return (
    <>
        <h3>Formularios</h3>
        <input 
            type="text" 
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={( evnt ) => onChange( evnt.target.value, 'email')}
        />

        <input 
            type="text" 
            className="form-control mt-2 mb-2"
            placeholder="Password"
            value={password}
            onChange={( evnt ) => onChange( evnt.target.value, 'password')}
        />

        <code>
            <pre>{ JSON.stringify( formulario, null, 2 ) }</pre>
        </code>
    </>
  )
}
