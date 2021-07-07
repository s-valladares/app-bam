import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente, IClientes } from 'src/app/services/clientes/clientes';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: IClientes[];
  cliente: IClientes;
  loading: boolean;
  submitted = false;
  mForma: FormGroup;

  constructor(
    private serviceClientes: ClientesService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
  ) {
    this.loading = false;
    this.cliente = Cliente.empty();
    this.clientes = [];
    this.mForma = this.generarFormulario();
  }

  ngOnInit(): void {
    this.getAll();
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
      this.mForma.reset();
      this.clientes.push(this.cliente);
      this.toast.success(data.message);
      alert(data.message);
      console.log(data);
    }).catch(error => {
      this.toast.success(error.message);
    });
  }

  onSubmit() {
    this.cliente = this.mForma.value as IClientes;
    console.log(this.cliente);
    this.insertarCliente();
  }

}
