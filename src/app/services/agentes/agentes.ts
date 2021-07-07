export interface IAgentes {
    id?: number;
    nombres: string;
    apellidos: string;
    nacimiento: Date;
    direccion: string;
    telefono: string;

    concesionarioId: number;
    createdAt: Date;
}

export class Agente {
    static empty() {
        return {
            id: 0,
            nombres: '',
            apellidos: '',
            direccion: '',
            telefono: '',
            concesionarioId: 0,
            createdAt: new Date()
        } as IAgentes
    }
}
