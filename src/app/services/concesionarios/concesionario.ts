export interface IConcesionarios {
    id?: number;
    nombre: string;
    razon: string;
    email: string;
    departamento: string;
    municipio: string;
    createdAt: Date;
}

export class Agente {
    static empty() {
        return {
            id: 0,
            nombre: '',
            razon: '',
            departamento: '',
            municipio: '',
            email: '',
            createdAt: new Date()
        } as IConcesionarios
    }
}
