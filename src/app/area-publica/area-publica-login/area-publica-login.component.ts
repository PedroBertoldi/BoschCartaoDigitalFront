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

  constructor(private formBuilder: FormBuilder, private auth :AuthenticationService, private router: Router) { 
    //login redirect if already logged in
    if(this.auth.getUser()){
      this.router.navigate(['/meus-beneficios']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
            cpf: ['', Validators.required],
            nasc: ['', Validators.required]
        });

  }

  login(){
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.controls.cpf.value,this.loginForm.controls.nasc.value)
      .pipe(first()).subscribe(
                data => {
                    this.router.navigate(['meus-beneficios']);
                },
                error => {
                    //do stuff
                });;
  }

}
