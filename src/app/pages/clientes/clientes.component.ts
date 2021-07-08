import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente, IClientes } from 'src/app/services/clientes/clientes';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { IConcesionarios } from 'src/app/services/concesionarios/concesionario';
import { ConcesionariosService } from 'src/app/services/concesionarios/concesionarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: IClientes[];
  cliente: IClientes;
  concesionarios: IConcesionarios[];
  loading: boolean;
  submitted = false;
  mForma: FormGroup;

  constructor(
    private serviceClientes: ClientesService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
    private serviceConcesionarios: ConcesionariosService
  ) {
    this.loading = false;
    this.cliente = Cliente.empty();
    this.clientes = [];
    this.concesionarios = [];
    this.mForma = this.generarFormulario();
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllConcesionarios();
  }

  getAll() {
    this.loading = true;
    this.serviceClientes.getAll().then(data => {
      this.clientes = data;
      console.log(this.clientes);
      this.loading = false;
    }).catch(error => {
      this.toast.error('Ocurrió un error al obtener los clientes');
      this.loading = false;
    });
  }

  getAllConcesionarios() {
    this.loading = true;
    this.serviceConcesionarios.getAll().then(data => {
      this.concesionarios = data;
      console.log(this.concesionarios);
      this.loading = false;
    }).catch(error => {
      this.toast.error('Ocurrió un error al obtener los concesionarios');
      this.loading = false;
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

  generarFormulario() {
    return this.FormBuil.group({
      nombres: ['',],
      apellidos: [''],
      direccion: [''],
      telefono: [''],
      email: [''],
      estadoCivil: [''],
      nivelAcademico: [''],
      profesion: [''],
      concesionarioId: ['']
    });
  }

  insertarCliente() {
    this.serviceClientes.new(this.cliente).then(data => {
      this.showAlert(data.success, data.message);

      if (data.success) {
        this.mForma.reset();
        this.clientes.push(this.cliente);
      }

      console.log(data);
    }).catch(error => {
      this.showAlert(false, error.message)
    });
  }

  onSubmit() {
    this.cliente = this.mForma.value as IClientes;
    console.log(this.cliente);
    this.insertarCliente();
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
