import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BeneficioService } from 'src/app/services/beneficio.service';

export interface Beneficio {
  id: number | string,
  evento: number,
  nome: string,
}

@Component({
  selector: 'app-area-administrativa-consulta-beneficio',
  templateUrl: './area-administrativa-consulta-beneficio.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-beneficio.component.css']
})
export class AreaAdministrativaConsultaBeneficioComponent implements OnInit {


  idEventoFromRoute!: number;

  beneficios!: any

  buscaBeneficios!:any 

  constructor(private route: ActivatedRoute, private beneficioService:BeneficioService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));

    this.updateBeneficioList();
  }

  updateBeneficioList(){
    this.beneficioService.getBeneficiosByEventoId(this.idEventoFromRoute).pipe(first()).subscribe(
      data => {
          this.beneficios=data;
          this.buscaBeneficios = this.beneficios
          })
  }

  deleteBeneficio(beneficio : any){
    this.beneficioService.deleteBeneficio(beneficio.id).pipe(first()).subscribe(
      data =>{
        this.updateBeneficioList();
      }
    );
  }

  buscar(valor: string): void {
    this.buscaBeneficios = this.beneficios.filter((beneficio :any) => beneficio.descricaoNormalizada.includes(valor.toUpperCase())) 
  }
  
  limpar(): void {
    this.buscaBeneficios = this.beneficios
  }

}
