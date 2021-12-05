import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficio-table',
  templateUrl: './beneficio-table.component.html',
  styleUrls: ['./beneficio-table.component.css']
})
export class BeneficioTableComponent implements OnInit {
  @Input() data!: any[];
  direitos: any =[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if(this.data){
      console.log(this.data);
      
      this.data.forEach(direitoIndividual => {
        let rep = false;
        this.direitos.forEach((direito:any) => {
          if(direito.beneficio.id == direitoIndividual.beneficio.id){
            direito.quantidade ++;
            rep =true;
          }
        });
        if(rep == false){
          direitoIndividual.quantidade =1;
          this.direitos.push(direitoIndividual);
        }

      });

    }
  }
  

}
