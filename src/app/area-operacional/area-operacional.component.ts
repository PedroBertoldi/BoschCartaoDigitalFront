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

  constructor(private router: Router, private route: ActivatedRoute, private operacionalService: OperacionalService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    
    this.cpf = routeParams.get('cpf');
    this.edv = routeParams.get('edv');

    if (!this.cpf && !this.edv) {
      this.router.navigate(['operacional/validacao']);
    } else {
      let request: any = {};
      if (this.cpf != '0') {
        request.Cpf = this.cpf;
      } else {
        request.Edv = this.edv;
      }

      this.operacionalService.getDireitos(request).pipe(first()).subscribe(data => {
        this.evento = data.evento
        this.colaborador = data.colaborador
        console.log(data)

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

        this.beneficios = beneficios;
      })
    }
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
    
    console.log(request)
    console.log(this.colaborador)

    this.operacionalService.receberDireitos(request).pipe(first()).subscribe(data => {
      this.router.navigate(['operacional/validacao']);
    });
  }

}
