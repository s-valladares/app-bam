import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public footerInformation: any

  constructor() {
    this.footerInformation = {
      author: 'Salvador Valladares',
      anioInicio: '2021',
      anioFin: '2030'
    }
  }

  ngOnInit(): void {
  }

}
