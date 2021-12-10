import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IndicacaoService } from 'src/app/services/indicacao.service';
@Component({
  selector: 'app-area-publica-indicar',
  templateUrl: './area-publica-indicar.component.html',
  styleUrls: ['./area-publica-indicar.component.css']
})
export class AreaPublicaIndicarComponent implements OnInit {
  removeLoading: boolean =false;
  loading: boolean =false;
  idType= "edv";
  user: any;
  indicado : any;
  edv!:string;
  indicarForm!: FormGroup;
  submitted = false;
  notfound = false;
  selfIndicating = false;
  indicationAttempt= false;
  noBenefits= false;;
  
  constructor(private auth:AuthenticationService, 
    private router: Router, private formBuilder:FormBuilder, private indicar: IndicacaoService) { }
    
  ngOnInit(): void {
    this.indicarForm = this.formBuilder.group({
            cpf: ['', [Validators.required, Validators.minLength(11)]],
            edv: ['', [Validators.required, Validators.minLength(3)]],
            name:new FormControl({value:'',disabled:true},[Validators.required, Validators.maxLength(255)])
        });

    this.user= this.auth.getUser();
    this.updateIndicado();
  }

  changeType(){
    this.submitted =false;
    if(this.idType =='edv'){
      this.indicarForm.controls.cpf.setValue('');
      this.indicarForm.controls.name.setValue('');
      this.indicarForm.controls.name.disable();
    }else{
      this.indicarForm.controls.name.setValue('');
      this.indicarForm.controls.edv.setValue('');
      this.indicarForm.controls.name.enable();
    }
  }

  updateIndicado(){
    this.indicar.getIndicado(this.user.id, this.user.nasc).pipe(first()).subscribe(
                    data => {
                          this.indicado = data;      
                     }, error=>{
                        this.indicado = null; 
                        if(this.indicationAttempt){
                          this.noBenefits = true;
                        }
                      });
  }


  removeIndicacao(){
    this.removeLoading =true;
    this.indicar.removeIndicar(this.user.id).pipe(first()).subscribe(data=>{
      this.removeLoading=false;
      this.updateIndicado();
      this.indicationAttempt = false;
      this.noBenefits = false;
      this.indicarForm.reset();
      this.submitted= false;
    });
  }

  submitIndicacao(){
    this.submitted= true;
    if((this.indicarForm.controls.cpf.valid && this.indicarForm.controls.name.valid)||this.indicarForm.controls.edv.valid && !this.notfound && !this.selfIndicating){
      this.loading=true;
      this.indicar.indicar(this.user.id,this.indicarForm.controls.name.value,this.indicarForm.controls.cpf.value, this.indicarForm.controls.edv.value).pipe(first()).subscribe(
        data => {
                    this.loading=false;
                    this.indicationAttempt = true;
                    this.updateIndicado();
                  }, erro=>{
                    this.loading=false;
                    this.indicarForm.reset();
                  });
      this.indicarForm.reset();
      this.submitted= false;
    }

  }


  searchEdv(){
    if(this.indicarForm.controls.edv.valid){
      this.indicar.getColaborador(this.indicarForm.controls.edv.value).pipe(first()).subscribe(data => {
                    this.indicarForm.controls.name.setValue(data.nomeCompleto);
                    this.notfound = false;
                    
                    if (data.id == this.user.id) {
                      this.selfIndicating = true;
                    } else {
                      this.selfIndicating = false;
                    }
                      
                  }, error=>{
                    console.log('not found')
                    this.notfound = true;
                    this.selfIndicating = false;
                    this.indicarForm.controls.name.setValue('');
                });
    }else{
      this.indicarForm.controls.name.setValue('');
    }
    
  }
}
