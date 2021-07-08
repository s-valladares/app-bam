import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Agente, IAgentes } from 'src/app/services/agentes/agentes';
import { AgentesService } from 'src/app/services/agentes/agentes.service';
import { IConcesionarios } from 'src/app/services/concesionarios/concesionario';
import { ConcesionariosService } from 'src/app/services/concesionarios/concesionarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {

  agentes: IAgentes[];
  agente: IAgentes;
  concesionarios: IConcesionarios[];
  loading: boolean;
  submitted = false;
  mForma: FormGroup;

  constructor(
    private serviceAgente: AgentesService,
    private serviceConcesionarios: ConcesionariosService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
  ) {
    this.loading = false;
    this.agente = Agente.empty();
    this.agentes = [];
    this.concesionarios = [];
    this.mForma = this.generarFormulario();
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllConcesionarios();
  }

  getAll() {
    this.loading = true;
    this.serviceAgente.getAll().then(data => {
      this.agentes = data;
      console.log(this.agentes);
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
      this.showAlert(false, error.message)
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
      nacimiento: [''],
      concesionarioId: ['']
    });
  }

  insertarAgente() {
    this.serviceAgente.new(this.agente).then(data => {
      console.log(data);
      this.showAlert(data.success, data.message);

      if (data.success) {
        this.mForma.reset();
        this.agentes.push(this.agente);
      }

    }).catch(error => {
      console.log(error);
      this.showAlert(false, error.message)
    });
  }

  onSubmit() {
    this.agente = this.mForma.value as IAgentes;
    this.insertarAgente();
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
