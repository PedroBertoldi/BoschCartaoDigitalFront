import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-area-administrativa-cadastro-evento',
  templateUrl: './area-administrativa-cadastro-evento.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-evento.component.css']
})

export class AreaAdministrativaCadastroEventoComponent implements OnInit {

  formCadastro = this.formBuilder.group({
    nome: '',
    descricao: '',
    inicio: '',
    fim: ''
  })

  dataInicio = ''

  modalAberto = false

  tipoModal!: 'confirmacao' | 'atencao' 

  idEventoFromRoute!: number

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    if(this.router.url !== '/admin/evento/cadastro') {
      const routeParams = this.route.snapshot.paramMap;
      this.idEventoFromRoute = Number(routeParams.get('idEvento'));

      this.adminService.getEventoById(this.idEventoFromRoute).pipe(first()).subscribe(
        data => {
            this.formCadastro.setValue({
              nome: data.nome,
              descricao: data.descricao,
              inicio: this.formatarData(new Date(data.dataInicio)),
              fim: this.formatarData(new Date(data.dataFim))
            })
          },
        error => {
            if(error.status == 401  || error.status == 400){
              console.log("erro ao buscar os dados")
            }
            else{
              console.log("problemas de conexao")
            }
        })
      
      }
  }

  formatarData(data: Date): string {
    return new Intl.DateTimeFormat('fr-CA').format(data)
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  salvarDados(): void {
    console.log(this.formCadastro.value)
    this.formCadastro.reset()
    this.tipoModal = 'confirmacao'
    this.abrirModal()
  }

  onSubmit(): void {
    if(this.formCadastro.value.nome !== '' || this.formCadastro.value.inicio !== '' || this.formCadastro.value.fim !== ''){
      let hoje = new Date
      hoje.setDate(hoje.getDate()-1)

      if(new Date(this.formCadastro.value.inicio) < hoje) {
        this.tipoModal = 'atencao'
        this.abrirModal()
      } else {
        this.salvarDados()
      }
    }
  }

}
