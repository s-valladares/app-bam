export interface IVehiculos {
    id?: number;
    marca: string;
    descripcion: string;
    linea: string;
    color: string;
    tipo: string;
    modelo: number;
    costo: number;
    cantidad: number;
    precio: number;
    cc: number;
    v: string;
    image: string;
    formaPago: string
    numeroPagos: number;
    createdAt: Date;
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
            cantidad: 0,
            precio: 0,
            image: '',
            color: '',
            formaPago: '',
            numeroPagos: 0,
            descripcion: '',
            cc: 0,
            v: '',
            createdAt: new Date()
        } as IVehiculos
    }
}
