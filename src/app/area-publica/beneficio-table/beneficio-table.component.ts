import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficio-table',
  templateUrl: './beneficio-table.component.html',
  styleUrls: ['./beneficio-table.component.css']
})
export class BeneficioTableComponent implements OnInit {
  @Input() data!: any[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
