import { Component, HostListener, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DireitoService } from 'src/app/services/direito.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent implements OnInit {

  constructor(private auth: AuthenticationService, private direito: DireitoService) { }
  edv!:string;
  public size: any;


  ngOnInit(): void {
    
    this.size= window.innerWidth > window.innerHeight? window.innerHeight : window.innerWidth;
    this.size = this.size*4/5;
    let user = this.auth.getUser();
    this.direito.getDireitos(user.cpf, user.nasc).pipe(first()).subscribe(
                data => {
                  this.edv = data.colaborador.edv;
                });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.size= window.innerWidth > window.innerHeight? window.innerHeight : window.innerWidth;
    this.size = this.size*4/5;
  }


}
