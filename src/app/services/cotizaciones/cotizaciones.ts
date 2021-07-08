export interface ICotizaciones {
    id?: number;
    cliente_id: number;
    vehiculo_id: number;
    agente_id: number;
    concesionario_id: number;
    nombres: string;
    apellidos: string;
    marca: string;
    linea: string;
    modelo: string;
    precio: number;
    createdAt: Date;
}

export class Cotizaciones {
    static empty() {
        return {
            id: 0,
            cliente_id: 0,
            vehiculo_id: 0,
            agente_id: 0,
            concesionario_id: 0,
            nombres: '',
            apellidos: '',
            marca: '',
            linea: '',
            modelo: '',
            precio: 0,
            createdAt: new Date()
        } as ICotizaciones
    }
}