import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/services/admin.service';

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

  constructor(private route: ActivatedRoute, private admin:AdminService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));

    this.admin.getBeneficiosByEventoId(this.idEventoFromRoute).pipe(first()).subscribe(
      data => {
          this.beneficios=data;
          this.buscaBeneficios = this.beneficios
          })
  }

  deleteBeneficio(beneficio : any){
    this.admin.deleteBeneficioById(beneficio.id);
  }

  buscar(valor: string): void {
    this.buscaBeneficios = this.beneficios.filter((beneficio :any) => beneficio.descricaoNormalizada.includes(valor.toUpperCase())) 
  }
  
  limpar(): void {
    this.buscaBeneficios = this.beneficios
  }

}
