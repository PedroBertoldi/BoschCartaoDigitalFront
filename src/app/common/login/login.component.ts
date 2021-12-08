import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  wrong = false;
  area:"public"|"admin"|"ops"= "public";
  loading=false;
  
  constructor(private formBuilder: FormBuilder, private auth :AuthenticationService, private router: Router, private active: ActivatedRoute) { 
    if(this.router.routerState.snapshot.url=='/admin'){
      this.area = "admin" ;
    }
    else if(this.router.routerState.snapshot.url =="/operacional"){
      this.area= "ops";
    }
    //login redirect if already logged in
    if(this.auth.getUser()){
      this.redirect();
    }
  }

  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
            cpf: ['', Validators.required],
            nasc: ['', Validators.required],
            captcha:['', Validators.required]
        });

  }

  redirect(){
    if(this.area == "admin"){
        this.router.navigate(['admin/evento']);
      } else if(this.area =="ops"){
        this.router.navigate(['operacional/validacao']);
      }else{
        this.router.navigate(['/meus-beneficios']);
    }
  }

  login(){
    this.submitted= true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading=true;
    this.auth.login(this.loginForm.controls.cpf.value,this.loginForm.controls.nasc.value)
      .pipe(first()).subscribe(
                data => {
                  this.loading=false;
                  this.redirect();
                },
                error => {
                  console.log(error)
                  this.loading=false;
                  if(error.status == 400 || error.status == 401 ){
                    this.wrong = true;
                  }
                });
  }

}
