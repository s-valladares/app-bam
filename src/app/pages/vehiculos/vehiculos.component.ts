import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IConcesionarios } from 'src/app/services/concesionarios/concesionario';
import { ConcesionariosService } from 'src/app/services/concesionarios/concesionarios.service';
import { IVehiculos, Vehiculos } from 'src/app/services/vehiculos/vehiculos';
import { VehiculosService } from 'src/app/services/vehiculos/vehiculos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: IVehiculos[];
  vehiculo: IVehiculos;
  concesionarios: IConcesionarios[];
  loading: boolean;
  lineas: any[];
  colores: any[];
  marcas: any[];
  tipos: any[];
  submitted = false;
  mForma: FormGroup;
  tipoForm: string;


  constructor(
    private serviceVehiculo: VehiculosService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
    private serviceConcesionarios: ConcesionariosService
  ) {
    this.vehiculos = [];
    this.vehiculo = Vehiculos.empty();
    this.loading = false;
    this.lineas = [];
    this.concesionarios = [];
    this.colores = []
    this.marcas = [];
    this.tipos = [];
    this.mForma = this.generarFormulario();
    this.tipoForm = '';
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllConcesionarios();
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
      this.showAlert(false, error.message)
    });
  }

  getAllConcesionarios() {
    this.loading = true;
    this.serviceConcesionarios.getAll().then(data => {
      this.concesionarios = data;
      console.log(this.concesionarios);
      this.loading = false;
    }).catch(error => {
      this.toast.error('Ocurrió un error al obtener los concesioanrios');
      this.loading = false;
    });
  }

  insertarVehiculo() {
    this.serviceVehiculo.new(this.vehiculo).then(data => {
      this.showAlert(data.success, data.message);

      if (data.success) {
        this.mForma.reset();
        this.vehiculos.push(this.vehiculo);
      }

      console.log(data);
    }).catch(error => {
      this.showAlert(false, error.message)
    });
  }


  actualizarVehiculo(id: any) {
    this.serviceVehiculo.update(this.vehiculo, id).then(data => {
      this.showAlert(data.success, data.message);

      if (data.success) {
        this.mForma.reset();
        this.getAll();
      }

      console.log(data);
    }).catch(error => {
      this.showAlert(false, error.message)
    });
  }

  ver(id: any) {


  }

  nuevo() {

  }

  eliminar(id: any) {

  }

  limpiarCampos() {
    this.mForma.reset();
  }

  modificar(id: any) {
    this.tipoForm = 'actualizar'
    this.serviceVehiculo.getById(id).then(data => {
      this.vehiculo = data[0];
      console.log(this.vehiculo);

      this.mForma.setValue({
        marca: this.vehiculo.marca,
        linea: this.vehiculo.linea,
        color: this.vehiculo.color,
        modelo: this.vehiculo.modelo,
        tipo: this.vehiculo.tipo,
        formaPago: this.vehiculo.formaPago,
        numeroPagos: this.vehiculo.numeroPagos,
        cc: this.vehiculo.cc,
        v: this.vehiculo.v,
        concesionarioId: this.vehiculo.concesionarioId,
        costo: this.vehiculo.costo,
        precio: this.vehiculo.precio,
        cantidad: this.vehiculo.cantidad

      });

    }).catch(error => {
      this.showAlert(false, error.message);
    });
  }

  getLineas() {
    this.lineas = [
      { nombre: 'Protege 5' },
      { nombre: '3' },
      { nombre: '6' },
      { nombre: 'Yaris' },
      { nombre: '22R' },
      { nombre: 'Hilux' },
      { nombre: 'Civic' },
      { nombre: 'Accord' },
      { nombre: 'Pilot' },
      { nombre: 'CRV' }
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
    let idTemp = this.vehiculo.id;
    this.vehiculo = this.mForma.value as IVehiculos;
    this.vehiculo.id = idTemp;
    console.log(this.vehiculo);

    if (this.tipoForm == 'actualizar') {
      this.actualizarVehiculo(idTemp);
    } else {
      this.insertarVehiculo();
    }


  }

  showAlert(success: boolean, message: string) {

    if (success) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: true
      })
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: message,
        showConfirmButton: true
      })
    }
  }

}
