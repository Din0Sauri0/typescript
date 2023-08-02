interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number
}
//Las interfaces permiten crear reglas de validacion para la creacion de objetos, no es igual a una clase,
//ya que no permite la creacion de instancias
//const persona = new Persona; <- Esto la interface no lo permite
//tambien la interface, es algo propio de TypeScript  y no JavaScript

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "Gustavo",
        edad: 24,
        direccion: {
            pais: "Chile",
            casaNo: 7845
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}

