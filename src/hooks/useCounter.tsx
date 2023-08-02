import { useState } from "react";

export const useCounter = (numeroInicial: number = 10) => {
    const [valor, setValor] = useState(numeroInicial);     
    const acumular = (numero: number) => {
        setValor(valor+numero);

    }
    return {
        valor,
        acumular
    }
}


