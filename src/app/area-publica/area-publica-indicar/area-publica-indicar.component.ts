import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-publica-indicar',
  templateUrl: './area-publica-indicar.component.html',
  styleUrls: ['./area-publica-indicar.component.css']
})
export class AreaPublicaIndicarComponent implements OnInit {

  constructor() { }
  idType= "edv";
  ngOnInit(): void {
    this.idType="edv"
  }

}
