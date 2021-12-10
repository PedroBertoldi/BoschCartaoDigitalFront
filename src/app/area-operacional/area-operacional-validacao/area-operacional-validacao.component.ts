import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BeneficioService } from 'src/app/services/beneficio.service';

@Component({
  selector: 'app-area-operacional-validacao',
  templateUrl: './area-operacional-validacao.component.html',
  styleUrls: ['./area-operacional-validacao.component.css']
})
export class AreaOperacionalValidacaoComponent implements OnInit {

  mostrar: string = "";
  validacaoForm!: FormGroup;
  cpf!:string;
  error: string ="";
  submitted: string = "";
  beneficios: any;
  allowedFormats = [ BarcodeFormat.QR_CODE];
  camera!:boolean;

  constructor(private formBuilder:FormBuilder, private router: Router, private beneficioService : BeneficioService, private auth: AuthenticationService) {
    let state = this.router.getCurrentNavigation()?.extras.state;

    if(state){
      this.error =state.error;
    }
    let scanner = new ZXingScannerComponent();
    scanner.askForPermission().then((camera: boolean)=>{
      this.camera= camera;
    });
   }

  scanSuccess(edv: string){
    console.log(edv)
    this.router.navigate(['operacional/retirar'], {state: {edv:edv}});
  }

  ngOnInit(): void {
    this.beneficioService.getBeneficiosByEventoId(0).pipe(first()).subscribe(
      data =>{
        this.beneficios = data;
      }
    );

    this.validacaoForm = this.formBuilder.group({
            cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
            edv: new FormControl('', [Validators.required, Validators.minLength(3)]),
            beneficiosSelecionados: new FormControl(JSON.parse(localStorage.getItem('beneficiosSelecionados') as string))
        });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['operacional']);
  }

  selected(){
    localStorage.setItem('beneficiosSelecionados', JSON.stringify(this.validacaoForm.value.beneficiosSelecionados));
  }

  submit(){
    this.submitted = this.mostrar;
    if(this.validacaoForm.controls.cpf.valid || this.validacaoForm.controls.edv.valid){
      let state = this.validacaoForm.value;
      delete state.beneficiosSelecionados;
      this.router.navigate(['operacional/retirar'], {state: state});
    } else {
      this.validacaoForm.markAllAsTouched();
    }
  }
}
