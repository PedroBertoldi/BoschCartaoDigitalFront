import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { IndicacaoService } from 'src/app/services/indicacao.service';
import { Beneficio } from '../area-administrativa-consulta-beneficio/area-administrativa-consulta-beneficio.component';

@Component({
  selector: 'app-area-administrativa-cadastro-beneficiarios',
  templateUrl: './area-administrativa-cadastro-beneficiarios.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-beneficiarios.component.css']
})
export class AreaAdministrativaCadastroBeneficiariosComponent implements OnInit {

  idEventoFromRoute!: number;


  modalAberto = false;

  beneficiosEvento!: any[]

  beneficiosSelecionados: {
    id: number,
    quantidade: number,
    nome: string | undefined 
  }[] = []


  formBeneficiario = this.formBuilder.group({
    nomeCompleto: new FormControl('',Validators.required),
    edv: new FormControl('',Validators.required),
    cpf: new FormControl('',Validators.pattern(/^[0-9]{11}$/)),
    unidadeOrganizacionalId: new FormControl('',Validators.required),
    dataNascimento: new FormControl('', Validators.required)
  })
  idColaboradorFromRoute!: number;
  colaborador: any;
  evento: any;
  direitos: any=[];
  areas: any;
  newBeneficio: any;
  beneficiosError: boolean =false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private beneficiarioService:BeneficiarioService, private beneficioService:BeneficioService, private indicacaoService:IndicacaoService) { }

  ngOnInit(): void {

    
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    this.idColaboradorFromRoute = Number(routeParams.get('idColaborador'));
    
    

    if(this.idColaboradorFromRoute){
      this.beneficiarioService.getBeneficiarioById(this.idEventoFromRoute,this.idColaboradorFromRoute).pipe(first()).subscribe(
        data=>{
          this.colaborador = data.colaborador;
          this.evento = data.evento;



          data.direitos.forEach((direitoUnitario: any) => {
            let rep = false;
            this.direitos.forEach((direito:any) => {
              if(direitoUnitario.beneficio.id == direito.beneficio.id){
                direito.quantidade++;
                rep = true;
              }
            });
            if(!rep){
              direitoUnitario.quantidade =1;
              this.direitos.push(direitoUnitario);
            }
          });
          
          
          this.formBeneficiario.setValue({
            ...(this.formBeneficiario.value),
            nomeCompleto: this.colaborador.nomeCompleto,
            edv: this.colaborador.edv,
            cpf: this.colaborador.cpf,
            unidadeOrganizacionalId: this.colaborador.unidadeOrganizacional.id,
            dataNascimento: this.colaborador.dataNascimento.substr(0,10)
          })
        }
        )  
      }
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

  construtorFormGroup(): any {
    let grupo: any = {
      newBeneficio: new FormControl(''),
    };
    for(let direito of this.direitos) {
      const key = 'direito' + direito.beneficio.id
      grupo[key] = new FormControl('');
    }
    return grupo;
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  limparBeneficios(){
    this.direitos = []
  }

  adicionarBeneficio(){
    if(this.newBeneficio){
      this.beneficiosError=false;
      const found = this.direitos.find(( direito:any) => direito.beneficio.id == this.newBeneficio.id);
      if(found){
        found.quantidade++;
      }else{
        this.direitos.push({beneficio:this.newBeneficio, quantidade:1})
      }
      this.newBeneficio="";
    }
  }

  organizeData(beneficiario:any, direitos:any){

    let filteredDireitos: any[]=[];
    direitos.forEach((direito:any) => {
      filteredDireitos.push({eventoId: this.idEventoFromRoute, beneficioId:direito.beneficio.id, qtdBeneficio:direito.quantidade})
    });
    return {
      ...beneficiario,
      beneficios: filteredDireitos
    }
  }

  edvInput(){
    if(this.formBeneficiario.value.edv?.length>2){
      this.beneficiarioService.getBeneficiarioByEdv(this.idEventoFromRoute,this.formBeneficiario.value.edv).pipe(first()).subscribe(
        data=>{
          this.colaborador= data.colaborador;
          this.direitos = [];
            data.direitos.forEach((direitoUnitario: any) => {
              let rep = false;
              this.direitos.forEach((direito:any) => {
                if(direitoUnitario.beneficio.id == direito.beneficio.id){
                  direito.quantidade++;
                  rep = true;
                }
              });
              if(!rep){
                direitoUnitario.quantidade =1;
                this.direitos.push(direitoUnitario);
              }
            });
            this.formBeneficiario.setValue({
              ...(this.formBeneficiario.value),
              nomeCompleto: this.colaborador.nomeCompleto,
              edv: this.colaborador.edv,
              cpf: this.colaborador.cpf,
              unidadeOrganizacionalId: this.colaborador.unidadeOrganizacional.id,
              dataNascimento: this.colaborador.dataNascimento.substr(0,10)
            }
          )
        }
      )
    }
  }


  onSubmit(): void {
    if(this.direitos.length==0){
      this.beneficiosError =true;
      return;
    }
    if(this.formBeneficiario.valid){
      if(this.idColaboradorFromRoute){
        this.beneficiarioService.updateBeneficiario(this.idColaboradorFromRoute,this.organizeData(this.formBeneficiario.value, this.direitos)).pipe(first()).subscribe(
          data=>{
            this.formBeneficiario.reset()
            this.abrirModal()
          }
        )
      }else{
        this.beneficiarioService.createBeneficiario(this.organizeData(this.formBeneficiario.value, this.direitos)).pipe(first()).subscribe(
          data=>{
            this.formBeneficiario.reset()
            this.abrirModal()
          }
        )
      }
    } else {
      this.formBeneficiario.markAllAsTouched()
    }
  }
}
