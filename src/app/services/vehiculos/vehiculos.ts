export interface IVehiculos {
    id?: number;
    marca: string;
    linea: string;
    tipo: string;
    modelo: number;
    costo: number;
    precio: number;
    image: string
    formaPago: string
    createdAt: Date;
    updatedAt: Date;
}

export class Vehiculos {
    static empty() {
        return {
            id: 0,
            marca: '',
            linea: '',
            tipo: '',
            modelo: 0,
            costo: 0,
            precio: 0,
            image: '',
            formaPago: '',
            createdAt: new Date(),
            updatedAt: new Date()
        } as IVehiculos
    }
}
