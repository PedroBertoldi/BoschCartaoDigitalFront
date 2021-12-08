import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { delay, first } from 'rxjs/operators';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { IndicacaoService } from 'src/app/services/indicacao.service';

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


 
  idColaborador!: number;
  colaborador: any;
  evento: any;
  direitos: any=[];
  areas: any;
  newBeneficio: any;
  beneficiosError: boolean =false;
  formBeneficiario: any;
  nenhumSelecionado: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private beneficiarioService:BeneficiarioService, private beneficioService:BeneficioService, private indicacaoService:IndicacaoService) { }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    this.idColaborador = Number(routeParams.get('idColaborador'));
    
    this.formBeneficiario = this.formBuilder.group({
      nomeCompleto: new FormControl('',[Validators.required, Validators.maxLength(255)]),
      edv: new FormControl('',[Validators.required, Validators.minLength(3)]),
      cpf: new FormControl('',[Validators.pattern(/^[0-9]{11}$/), Validators.required]),
      unidadeOrganizacionalId: new FormControl('',Validators.required),
      dataNascimento: new FormControl('', [Validators.required, Validators.maxLength(10)])
    })
    
    

    if(this.idColaborador){
      this.disableAll();
      this.beneficiarioService.getBeneficiarioById(this.idEventoFromRoute,this.idColaborador).pipe(first()).subscribe(
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
      this.nenhumSelecionado = false;
      this.beneficiosError=false;
      const found = this.direitos.find(( direito:any) => direito.beneficio.id == this.newBeneficio.id);
      if(found){
        found.quantidade++;
      }else{
        this.direitos.push({beneficio:this.newBeneficio, quantidade:1})
      }
      this.newBeneficio="";
    } else {
      console.log(this.nenhumSelecionado)
      this.nenhumSelecionado = true;
      console.log(this.nenhumSelecionado)
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
          this.idColaborador = data.colaborador.id  
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

            let values = {
              ...(this.formBeneficiario.value),
              nomeCompleto: this.colaborador.nomeCompleto,
              edv: this.colaborador.edv,
              cpf: this.colaborador.cpf,
              dataNascimento: this.colaborador.dataNascimento.substr(0,10)
            };
            if(this.colaborador.unidadeOrganizacional){
              values.unidadeOrganizacionalId =this.colaborador.unidadeOrganizacional?.id;
            }
            this.formBeneficiario.setValue(values)
            this.disableAll();
        }
      )
    }
  }



  disableAll(){
    this.formBeneficiario.controls.edv.disable();
    this.formBeneficiario.controls.nomeCompleto.disable();
    this.formBeneficiario.controls.cpf.disable();
    this.formBeneficiario.controls.dataNascimento.disable();
  }

  onSubmit(): void {
    if(this.direitos.length==0){
      this.formBeneficiario.markAllAsTouched()
      this.beneficiosError =true;
      return;
    }
    if(this.formBeneficiario.controls.edv.disabled || this.formBeneficiario.valid){
      if(this.idColaborador){
        console.log(this.formBeneficiario.getRawValue())
        console.log(this.colaborador)
        this.beneficiarioService.updateBeneficiario(this.idColaborador,this.organizeData(this.formBeneficiario.getRawValue(), this.direitos)).pipe(first()).subscribe(
          data=>{
            this.formBeneficiario.reset()
            this.abrirModal()
          }
        )
      }else{
        this.beneficiarioService.createBeneficiario(this.organizeData(this.formBeneficiario.getRawValue(), this.direitos)).pipe(first()).subscribe(
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
