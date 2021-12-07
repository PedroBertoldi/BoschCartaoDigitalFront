import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { OperacionalService } from '../services/operacional.service';

@Component({
  selector: 'app-area-operacional',
  templateUrl: './area-operacional.component.html',
  styleUrls: ['./area-operacional.component.css']
})
export class AreaOperacionalComponent implements OnInit {

  cpf!: string | null
  edv!: string | null
  beneficios: any = []
  evento!: any
  colaborador!: any
  beneficiosSelecionados!: number[];

  constructor(private router: Router, private route: ActivatedRoute, private operacionalService: OperacionalService) { 
    let state = this.router.getCurrentNavigation()?.extras.state;

    if (!state) {
      this.router.navigate(['operacional/validacao']);
    } else {
      if(!state.cpf){
        delete state.cpf;
      }
      if(!state.edv){
        delete state.edv
      }
      
      this.beneficiosSelecionados = JSON.parse(localStorage.getItem('beneficiosSelecionados') as string);
      this.operacionalService.getDireitos(state).pipe(first()).subscribe(data => {
        this.evento = data.evento
        this.colaborador = data.colaborador
        this.beneficios = this.formatBeneficios(data);
        if(this.beneficiosSelecionados && this.beneficiosSelecionados.length>0){
          this.beneficios = this.beneficios.filter((beneficio: any)=>{
            return this.beneficiosSelecionados.includes(beneficio.beneficio.id);
          })
        }
      }, error=>{
        this.router.navigate(['operacional/validacao'], {state: error});
      })
    }

    if (this.beneficios.length == 0 && this.evento == undefined && this.colaborador == undefined) {
      this.router.navigate(['operacional/validacao']);
    }
  }

  ngOnInit(): void {
  }

  formatBeneficios(data:any){
    let beneficios: any = [];
        data.direitosColaborador.filter((direito: any) => { return direito.retirado == null}).forEach((direito: any)=> {
          let rep = false;
          beneficios.forEach((beneficio: any)=> {
            if (direito.beneficio.id == beneficio.beneficio.id){
              rep = true;
              beneficio.beneficiario.push({...data.colaborador, direitoId: direito.id});
            }
          });

          if (!rep) {
            direito.beneficiario = [];
            direito.beneficiario.push({...data.colaborador, direitoId: direito.id});
            beneficios.push(direito);
          }
          
        });
        data.solicitadoParaRetirar.forEach((terceiro: any)=> {
          terceiro.direitosColaborador.filter((direito: any) => { return direito.retirado == null}).forEach((direito: any)=> {
            let rep = false;
            beneficios.forEach((beneficio: any)=> {
              if (direito.beneficio.id == beneficio.beneficio.id){
                rep = true;
                beneficio.beneficiario.push({...terceiro.colaborador, direitoId: direito.id});
              }
            });

            if (!rep) {
              direito.beneficiario = [];
              direito.beneficiario.push({...terceiro.colaborador, direitoId: direito.id});
              beneficios.push(direito);
            }
            
            });
        });
        return beneficios;
  }

  send(){
    let direitosEntregues: any = [];

    this.beneficios.forEach((beneficio: any) => {
      beneficio.beneficiario.forEach((beneficiario: any) => {
        if (beneficiario.check) {
          direitosEntregues.push(beneficiario.direitoId);
        }
      });
    });
    let request: any = {eventoId: this.evento.id, colaboradorId: this.colaborador.id, direitosEntregues: direitosEntregues};
    
    this.operacionalService.receberDireitos(request).pipe(first()).subscribe(data => {
      this.router.navigate(['operacional/validacao']);
    });
  }
}
