export const TiposBasicos = () => {

    const nombre: string = "Gustavo";
    const edad: number = 24;
    const estaActivo: boolean = false;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua '];

    return (
        <>
            <h3>Tipos basicos</h3>
            { nombre }, { edad }, { estaActivo ? "Activo" : "No activo" }
            <br />
            {poderes.join(', ')}
        </>
    )
}   
