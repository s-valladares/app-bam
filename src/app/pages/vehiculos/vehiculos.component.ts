import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IVehiculos, Vehiculos } from 'src/app/services/vehiculos/vehiculos';
import { VehiculosService } from 'src/app/services/vehiculos/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: IVehiculos[];
  vehiculo: IVehiculos;
  loading: boolean;
  lineas: any[];
  colores: any[];
  marcas: any[];
  tipos: any[];
  submitted = false;
  mForma: FormGroup;

  constructor(
    private serviceVehiculo: VehiculosService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
  ) {
    this.vehiculos = [];
    this.vehiculo = Vehiculos.empty();
    this.loading = false;
    this.lineas = [];
    this.colores = []
    this.marcas = [];
    this.tipos = [];
    this.mForma = this.generarFormulario();
  }

  ngOnInit(): void {
    this.getAll();
    this.getLineas();
    this.getColores();
    this.getMarcas();
    this.getTipos();
  }

  getAll() {
    this.loading = true;
    this.serviceVehiculo.getAll().then(data => {
      this.vehiculos = data;
      console.log(this.vehiculos);
      this.loading = false;
    }).catch(error => {
      this.toast.error('Ocurrió un error al obtener los vehículos');
      this.loading = false;
    });
  }

  insertarVehiculo() {
    this.serviceVehiculo.new(this.vehiculo).then(data => {
      this.mForma.reset();
      this.vehiculos.push(this.vehiculo);
      this.toast.success(data.message);
      alert(data.message);
      console.log(data);
    }).catch(error => {
      this.toast.success(error.message);
    });
  }

  ver(id: any) {

  }

  nuevo() {

  }

  eliminar(id: any) {

  }

  modificar(id: any) {

  }

  getLineas() {
    this.lineas = [
      { nombre: 'Protege 5' },
      { nombre: '3' },
      { nombre: '6' },
      { nombre: 'Yaris' },
      { nombre: 'Civic' },
      { nombre: 'Hilux' }
    ]
  }

  getColores() {
    this.colores = [
      { nombre: 'Rojo' },
      { nombre: 'Azul' },
      { nombre: 'Negro' },
      { nombre: 'Blanco' },
      { nombre: 'Gris' },
      { nombre: 'Verde' }
    ]
  }

  getMarcas() {
    this.marcas = [
      { nombre: 'Toyota' },
      { nombre: 'Honda' },
      { nombre: 'Mazda' }
    ]
  }

  getTipos() {
    this.tipos = [
      { nombre: 'Camioneta' },
      { nombre: 'Automóvil' },
      { nombre: 'Pickup' },
      { nombre: 'Microbus' }
    ]
  }

  generarFormulario() {
    return this.FormBuil.group({
      marca: ['',],
      linea: [''],
      color: [''],
      modelo: [''],
      tipo: [''],
      formaPago: [''],
      numeroPagos: [''],
      cc: [''],
      v: [''],
      concesionarioId: [''],
      costo: [''],
      precio: [''],
      cantidad: ['']
    });
  }

  onSubmit() {
    this.vehiculo = this.mForma.value as IVehiculos;
    console.log(this.vehiculo);
    this.insertarVehiculo();
  }

}
