import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-area-administrativa-cadastro-evento',
  templateUrl: './area-administrativa-cadastro-evento.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-evento.component.css']
})

export class AreaAdministrativaCadastroEventoComponent implements OnInit {

  dataInicio = ''

  modalAberto = false

  tipoModal!: 'confirmacao' | 'atencao' 

  idEventoFromRoute!: number

  validarDataFim(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const anterior = new Date(control.value) < new Date(this.dataInicio);
      return anterior ? {dataAnterior: {value: control.value}} : null;
    };
  }

  formCadastro = this.formBuilder.group({
    nomeEvento: new FormControl('',Validators.required),
    descricao: '',
    inicio: new FormControl('',Validators.required),
    fim: new FormControl('',[Validators.required,this.validarDataFim()])
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    if(this.router.url !== '/admin/evento/cadastro') {
      const routeParams = this.route.snapshot.paramMap;
      this.idEventoFromRoute = Number(routeParams.get('idEvento'));

      this.adminService.getEventoById(this.idEventoFromRoute).pipe(first()).subscribe(
        data => {
            this.formCadastro.setValue({
              nomeEvento: data.nome,
              descricao: data.descricao,
              inicio: this.formatarData(new Date(data.dataInicio)),
              fim: this.formatarData(new Date(data.dataFim))
            })
          },
        error => {
            if(error.status == 400){
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
    if(this.idEventoFromRoute){
      let event = this.formCadastro.value;
      event.id= this.idEventoFromRoute;
      this.adminService.updateEvento(event).pipe(first()).subscribe(
              data=>{
                this.formCadastro.reset()
                this.tipoModal = 'confirmacao'
                this.abrirModal()
              },
              error=>{
                console.log(error.error.errors[0].message)
            });
    }else{
      this.adminService.createEvento(this.formCadastro.value).pipe(first()).subscribe(
              data=>{
                this.formCadastro.reset()
                this.tipoModal = 'confirmacao'
                this.abrirModal()
              },
              error=>{
                console.log(error.error.errors[0].message)
            });
    }
    
  }

  onSubmit(): void {
    if(this.formCadastro.valid){
      let hoje = new Date
      hoje.setDate(hoje.getDate()-1)

      if(new Date(this.formCadastro.value.inicio) < hoje) {
        this.tipoModal = 'atencao'
        this.abrirModal()
      } else {
        this.salvarDados()
      }
    } else {
      this.formCadastro.markAllAsTouched()
    }
  }

}
