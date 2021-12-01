import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-publica-login',
  templateUrl: './area-publica-login.component.html',
  styleUrls: ['./area-publica-login.component.css']
})
export class AreaPublicaLoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  wrong = false;
  
  constructor(private formBuilder: FormBuilder, private auth :AuthenticationService, private router: Router) { 
    //login redirect if already logged in
    if(this.auth.getUser()){
      this.router.navigate(['/meus-beneficios']);
    }
  }

  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
            cpf: ['', Validators.required],
            nasc: ['', Validators.required],
            captcha:['', Validators.required]
        });

  }

  login(){
    this.submitted= true;
    console.log(
    this.loginForm.controls)
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.controls.cpf.value.replace(".","").replace("-",""),this.loginForm.controls.nasc.value)
      .pipe(first()).subscribe(
                data => {
                    console.log("sucesso")
                    this.router.navigate(['meus-beneficios']);
                },
                error => {
                    if(error.status == 401  || error.status == 400){
                      this.wrong = true;
                    }
                    else{
                      console.log("problemas de conexao")
                    }
                });;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
