import { Component, OnInit } from '@angular/core';
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

  constructor(
    private serviceVehiculo: VehiculosService,
    private toast: ToastrService
  ) {
    this.vehiculos = [];
    this.vehiculo = Vehiculos.empty();
    this.loading = false;
  }

  ngOnInit(): void {
    this.getAll();
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

  ver(id: any) {

  }

  nuevo() {

  }

  eliminar(id: any) {

  }

  modificar(id: any) {

  }

}
