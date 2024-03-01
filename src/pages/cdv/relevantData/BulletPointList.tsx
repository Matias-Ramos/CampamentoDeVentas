import { ReactNode } from "react";
import crossmark from '/assets/cross.png'
import checkmark from '/assets/checkmark.png'

export type BulletPoint_T = {
    icon: ReactNode,
    title?: string,
    description: string,
}

export const PossitiveBulletPoints = [
    {
        icon: <img src={checkmark} className="mw-100" alt="checkmark icon" />,
        title: "Teoría simple: ",
        description: "en menos de 3 horas comprendes el proceso de ventas de principio a fin, tienes una estructura lista para reaplicar en cualquier interacción con un prospecto.",
    },
    {
        icon: <img src={checkmark} className="mw-100" alt="checkmark icon" />,
        title: "Práctica furiosa: ",
        description: "nuestros instructores se ocupan de acompañar, supervisar, y calificar el proceso del vendedor desde su inicio hasta su exitoso desarrollo.",
    },
    {
        icon: <img src={checkmark} className="mw-100" alt="checkmark icon" />,
        title: "Mentalidad constante: ",
        description: "sembramos ambición y gatillos mentales que mantienen a los alumnos motivados aún después de finalizar el programa, transformamos su mentalidad.",
    },
]
export const NegativeBulletPoints = [
    {
        icon: <img src={crossmark} className="mw-100" alt="crossmark icon" />,
        description: 'No vas a necesitar libros de refuerzo, imprimir cientos de hojas, ni salir a buscar "ese dato que falta" para completar la rueda y hacerla girar.',
    },
    {
        icon: <img src={crossmark} className="mw-100" alt="crossmark icon" />,
        description: "No contiene información cruzada, inconclusa, o contradictoria. Nuestros instructores han sido formados integralmente bajo nuestra filosofía de ventas desde sus inicios.",
    },
    
]
