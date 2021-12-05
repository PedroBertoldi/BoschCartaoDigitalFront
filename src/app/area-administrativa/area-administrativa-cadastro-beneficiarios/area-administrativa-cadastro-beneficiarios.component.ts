import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { Beneficio } from '../area-administrativa-consulta-beneficio/area-administrativa-consulta-beneficio.component';

@Component({
  selector: 'app-area-administrativa-cadastro-beneficiarios',
  templateUrl: './area-administrativa-cadastro-beneficiarios.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-beneficiarios.component.css']
})
export class AreaAdministrativaCadastroBeneficiariosComponent implements OnInit {

  idEventoFromRoute!: number;

  nomeEvento!: string | undefined;

  modalAberto = false;

  beneficiosEvento!: any[]

  beneficiosSelecionados: {
    id: number,
    quantidade: number,
    nome: string | undefined 
  }[] = []

  formSelecionarBeneficios = this.formBuilder.group({})

  formBeneficiario = this.formBuilder.group({
    nome: new FormControl('',Validators.required),
    edv: new FormControl('',Validators.required),
    cpf: new FormControl('',Validators.pattern(/^[0-9]{11}$/)),
    area: new FormControl('',Validators.required),
    newBeneficio: new FormControl(''),
    beneficios: [],
  })
  idColaboradorFromRoute!: number;
  colaborador: any;
  evento: any;
  direitos: any;
  newBeneficio!:any;
  areas: any;
  area: any;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private beneficiarioService:BeneficiarioService, private beneficioService:BeneficioService) { }

  ngOnInit(): void {

    
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    this.idColaboradorFromRoute = Number(routeParams.get('idColaborador'));
    
    
    if(this.idColaboradorFromRoute){
      this.beneficiarioService.getBeneficiarioById(this.idEventoFromRoute,this.idColaboradorFromRoute).pipe(first()).subscribe(
        data=>{
          this.colaborador = data.colaborador;
          this.evento = data.evento;
          this.direitos = data.direitos;
          this.formSelecionarBeneficios = this.formBuilder.group(this.construtorFormGroup())
          this.formBeneficiario.setValue({
            ...(this.formBeneficiario.value),
            nome: this.colaborador.nomeCompleto,
            edv: this.colaborador.edv,
            cpf: this.colaborador.cpf,
          })
          this.area = this.colaborador.unidadeOrganizacional.id;
        }
        )
        this.beneficioService.getBeneficiosByEventoId(this.idEventoFromRoute).pipe(first()).subscribe(
          data=>{
            this.beneficiosEvento = data;
          }
          )
        this.beneficiarioService.getAreas().pipe(first()).subscribe(
          data=>{
            this.areas =data;
          }
        )
          

    }


    // if(eventosRegistrados.find(evento => evento.id === this.idEventoFromRoute)) {
    //   this.nomeEvento = eventosRegistrados.find(evento => evento.id === this.idEventoFromRoute)?.nome
    //   this.beneficiosEvento = beneficiosRegistrados.filter(beneficio => beneficio.evento === this.idEventoFromRoute)
    // }

    
  }

  construtorFormGroup(): any {
    let grupo: any = {};
    for(let direito of this.direitos) {
      const key = 'direito' + direito.id
      grupo[key] = 1
    }

    return grupo;
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  limparBeneficios(): void {
    this.formSelecionarBeneficios.setValue(this.construtorFormGroup())
  }


  inserirBeneficio(event: Event): void {
    const quantidade = Number((event.target as HTMLInputElement).value)
    const beneficioId = Number((event.target as HTMLInputElement).id)


    if(quantidade > 0) {
      this.beneficiosSelecionados.push({
        id: beneficioId,
        nome: (this.beneficiosEvento.find(beneficio => beneficio.id === beneficioId))?.nome,
        quantidade
      })
    } else {
      this.beneficiosSelecionados = this.beneficiosSelecionados.filter(beneficio => beneficio.id !== beneficioId)
    }
  }

  adicionarBeneficio(){
    this.direitos.push({beneficio:this.newBeneficio})
    this.formSelecionarBeneficios = this.formBuilder.group(this.construtorFormGroup());
  }

  onSubmit(): void {
    this.formBeneficiario.setValue({
      ...(this.formBeneficiario.value),
      evento: this.idEventoFromRoute,
      beneficios: this.beneficiosSelecionados,
    })

    if(this.formBeneficiario.valid){
      console.log(this.formBeneficiario.value)
      this.formBeneficiario.reset()
      this.abrirModal()
    } else {
      this.formBeneficiario.markAllAsTouched()
    }
  }
}
