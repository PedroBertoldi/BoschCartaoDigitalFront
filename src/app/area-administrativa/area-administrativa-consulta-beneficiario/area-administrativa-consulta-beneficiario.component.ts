import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';


@Component({
  selector: 'app-area-administrativa-consulta-beneficiario',
  templateUrl: './area-administrativa-consulta-beneficiario.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-beneficiario.component.css']
})
export class AreaAdministrativaConsultaBeneficiarioComponent implements OnInit {


  idEventoFromRoute!: number;

  beneficiarios!: any[]

  buscaBeneficiarios!:any[]

  constructor(private route: ActivatedRoute, private beneficiarioService:BeneficiarioService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    this.beneficiarioService.getBeneficiarios(this.idEventoFromRoute).pipe(first()).subscribe(
      data=>{
        this.beneficiarios= data.colaboradoresDireitos;
        this.buscaBeneficiarios = this.beneficiarios
      }
    )
  }

  buscar(valor: string): void {
    function buscaCompleta(buscado: any): any {
      for(var prop in buscado) {
        const valorProp = (JSON.stringify(buscado[prop])).toLowerCase() 
        if(valorProp.includes(valor.toLowerCase())) {
          return valorProp.includes(valor.toLowerCase())
        }
      }
    }

    this.buscaBeneficiarios = this.beneficiarios.filter(buscaCompleta) 
  }
  
  limpar(): void {
    this.buscaBeneficiarios = this.beneficiarios
  }

}
