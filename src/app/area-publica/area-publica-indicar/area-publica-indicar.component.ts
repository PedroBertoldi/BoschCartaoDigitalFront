import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DireitoService } from 'src/app/services/direito.service';
import { IndicacaoService } from 'src/app/services/indicacao.service';
@Component({
  selector: 'app-area-publica-indicar',
  templateUrl: './area-publica-indicar.component.html',
  styleUrls: ['./area-publica-indicar.component.css']
})
export class AreaPublicaIndicarComponent implements OnInit {
  
  constructor(private auth:AuthenticationService, private direito:DireitoService, 
    private router: Router, private formBuilder:FormBuilder, private indicar: IndicacaoService) { }
    idType= "edv";
    user: any;
    indicado : any;
    edv!:string;
    indicarForm!: FormGroup;
    submitted = false;
    notfound= false;
    
  ngOnInit(): void {
    this.idType="edv";
    this.indicarForm = this.formBuilder.group({
            cpf: ['', Validators.required],
            edv: ['', Validators.required],
            name:['', Validators.required]
        });

    this.user= this.auth.getUser();
    this.updateIndicado();
  }

  updateIndicado(){
    this.direito.getDireitos(this.user.cpf, this.user.nasc).pipe(first()).subscribe(
                      data => {
                          this.indicado = (data.direitos[0].indicado);      
                          console.log(this.indicado)
                     });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['']);
  }

  removeIndicacao(){
    this.indicar.removeIndicar(this.user.id).pipe(first()).subscribe(data=>{
      this.updateIndicado();
      this.indicarForm.reset();
      this.submitted= false;
    });
  }

  submitIndicacao(){
    this.submitted= true;
    if(this.indicarForm.controls.cpf.invalid && this.indicarForm.controls.edv.invalid){
      return;
    }
    this.indicar.indicar(this.user.id,this.indicarForm.controls.name.value,this.indicarForm.controls.cpf.value, this.indicarForm.controls.edv.value).pipe(first()).subscribe(
                data => {
                  this.updateIndicado();
                });
    this.indicarForm.reset();
    this.submitted= false;
  }


  searchEdv(){
    if(this.indicarForm.controls.edv.value.length==7){
      this.indicar.getColaborador(this.indicarForm.controls.edv.value).pipe(first()).subscribe(data => {
                    this.indicarForm.controls.name.setValue(data.nomeCompleto);
                    this.notfound = false;
                }, error=>{
                  this.notfound = true;
                  this.indicarForm.controls.edv.setValue('');
                });
    }else{
      this.indicarForm.controls.name.setValue('');
      this.notfound = false;
    }
    
  }
}
