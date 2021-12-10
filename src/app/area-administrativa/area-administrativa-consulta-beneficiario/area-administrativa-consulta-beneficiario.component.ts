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

  modalAberto = false

  tipoModal!: 'confirmacao' | 'exclusao' 

  colaboradorExclusao: any

  idEventoFromRoute!: number;

  beneficiarios!: any

  buscaBeneficiarios!:any

  constructor(private route: ActivatedRoute, private beneficiarioService:BeneficiarioService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    this.updateBeneficiarioList();
  }

  updateBeneficiarioList(){
    this.beneficiarioService.getBeneficiarios(this.idEventoFromRoute).pipe(first()).subscribe(
      (data:any)=>{
        console.log(data)
        this.beneficiarios= data.colaboradoresDireitos;
        this.beneficiarios.forEach((beneficiario:any) => {
          let direitos: any[] = [];
          beneficiario.direitos.forEach((direitoUnitario: any) => {
            let rep = false;
            direitos.forEach((direito:any) => {
              if(direitoUnitario.beneficio.id == direito.beneficio.id){
                direito.quantidade++;
                rep = true;
              }
            });
            if(!rep){
              direitoUnitario.quantidade =1;
              direitos.push(direitoUnitario);
            }
          });
          beneficiario.direitos = direitos;
        });
        
        this.buscaBeneficiarios = this.beneficiarios
      }
    )
  }

  ordenar(coluna: string, evento:Event): void {
    const elemento = evento.target as HTMLElement

    if (elemento.innerHTML === 'expand_less') {
      elemento.innerHTML = 'expand_more'
      this.buscaBeneficiarios = this.beneficiarios.sort((a: any, b: any) => {
        if(coluna === 'unidadeOrganizacional') {
          if(a.colaborador.unidadeOrganizacional.descricao > b.colaborador.unidadeOrganizacional.descricao) {
            return 1
          } else if (a.colaborador.unidadeOrganizacional.descricao < b.colaborador.unidadeOrganizacional.descricao) {
            return -1
          } else {
            return 0 
          }
        }

        if(a.colaborador[coluna] > b.colaborador[coluna]) {
          return 1
        } else if (a.colaborador[coluna] < b.colaborador[coluna]) {
          return -1
        } else {
          return 0 
        }
      })
    } else {
      elemento.innerHTML = 'expand_less'
      this.buscaBeneficiarios = this.beneficiarios.sort((a: any, b: any) => {
        if(coluna === 'unidadeOrganizacional') {
          if(a.colaborador.unidadeOrganizacional.descricao > b.colaborador.unidadeOrganizacional.descricao) {
            return -1
          } else if (a.colaborador.unidadeOrganizacional.descricao < b.colaborador.unidadeOrganizacional.descricao) {
            return 1
          } else {
            return 0 
          }
        }

        if(a.colaborador[coluna] > b.colaborador[coluna]) {
          return -1
        } else if (a.colaborador[coluna] < b.colaborador[coluna]) {
          return 1
        } else {
          return 0 
        }
      })
    }


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

  deleteColaborador(beneficiario:any){
    this.colaboradorExclusao = beneficiario
    this.tipoModal = 'exclusao'
    this.abrirModal()
  }
  
  confirmarDelete() {
    this.tipoModal = 'confirmacao'
    this.beneficiarioService.deleteBeneficiario(this.idEventoFromRoute, this.colaboradorExclusao.colaborador.id).pipe(first()).subscribe(
      data=>{
        this.updateBeneficiarioList();
      }
    );
  }
  
  limpar(): void {
    this.buscaBeneficiarios = this.beneficiarios
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

}
