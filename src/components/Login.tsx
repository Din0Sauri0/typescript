import { useEffect, useReducer } from "react"

//useReducer

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload= {
    username: string,
    nombre: string
}
type AuthAction = {type: 'logout'} | {type: 'login', payload: LoginPayload};

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            return {
                validando: false,
                token: 'abc123',
                username: action.payload.username,
                nombre: action.payload.nombre
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [  state, dispatch ] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
    }, []);

    const login = () => {
        dispatch({type: 'login',
        payload: {
            username: 'Din0Sauri0',
            nombre: 'Gustavo'
        }});
    }

    const logout = () => {
        dispatch({type: 'logout'});
    }

    if(state.validando){
        return(
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    validando....
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
                (state.token)
                    ? <div className="alert alert-success">Autenticado como: {state.username}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                (state.token)
                ?(
                    <button className="btn btn-danger" onClick={logout}>
                        Logout
                    </button>
                )
                :(
                    <button className="btn btn-primary" onClick={login}>
                        Login
                    </button>
                )
            }
        </>
    )
}

