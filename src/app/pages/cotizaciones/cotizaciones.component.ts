import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IConcesionarios } from 'src/app/services/concesionarios/concesionario';
import { Cotizaciones, ICotizaciones } from 'src/app/services/cotizaciones/cotizaciones';
import { CotizacionesService } from 'src/app/services/cotizaciones/cotizaciones.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {



  cotizaciones: ICotizaciones[];
  cotizacion: ICotizaciones;
  loading: boolean;
  submitted = false;
  mForma: FormGroup;

  constructor(
    private serviceCotizacion: CotizacionesService,
    private toast: ToastrService,
    private FormBuil: FormBuilder,
  ) {
    this.loading = false;
    this.cotizacion = Cotizaciones.empty();
    this.cotizaciones = [];
    this.mForma = this.generarFormulario();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this.serviceCotizacion.getAll().then(data => {
      this.cotizaciones = data;
      console.log(this.cotizaciones);
      this.loading = false;
    }).catch(error => {
      this.toast.error('Ocurrió un error al obtener los agentes');
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
      nombre: ['',],
      razon: [''],
      email: [''],
      telefono: [''],
      departamento: [''],
      municipio: ['']
    });
  }

  insertarAgente() {
    /* this.serviceConcesionario.new(this.concesionario).then(data => {
       this.mForma.reset();
       this.concesionarios.push(this.concesionario);
       this.toast.success(data.message);
       alert(data.message);
       console.log(data);
     }).catch(error => {
       this.toast.success(error.message);
     });*/
  }

  onSubmit() {/*
    this.concesionario = this.mForma.value as IConcesionarios;
    console.log(this.concesionario);
    this.insertarAgente();*/
  }


}
