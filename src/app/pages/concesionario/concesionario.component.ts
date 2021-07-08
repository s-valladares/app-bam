import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Concesionario, IConcesionarios } from 'src/app/services/concesionarios/concesionario';
import { ConcesionariosService } from 'src/app/services/concesionarios/concesionarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {


  concesionarios: IConcesionarios[];
  concesionario: IConcesionarios;
  loading: boolean;
  submitted = false;
  mForma: FormGroup;

  constructor(
    private serviceConcesionario: ConcesionariosService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
  ) {
    this.loading = false;
    this.concesionario = Concesionario.empty();
    this.concesionarios = [];
    this.mForma = this.generarFormulario();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this.serviceConcesionario.getAll().then(data => {
      console.log(data)
      if (data.success == false) {
        this.showAlert(false, data.message);
        return;
      }
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
      nombre: ['',],
      razon: [''],
      email: [''],
      telefono: [''],
      departamento: [''],
      municipio: ['']
    });
  }

  insertarAgente() {
    this.serviceConcesionario.new(this.concesionario).then(data => {
      this.showAlert(data.success, data.message);

      if (data.success) {
        this.mForma.reset();
        this.concesionarios.push(this.concesionario);
      }

      console.log(data);
    }).catch(error => {
      this.showAlert(false, error.message)
    });
  }

  onSubmit() {
    this.concesionario = this.mForma.value as IConcesionarios;
    console.log(this.concesionario);
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
