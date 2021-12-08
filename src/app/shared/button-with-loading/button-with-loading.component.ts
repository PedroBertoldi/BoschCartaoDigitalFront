import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-with-loading',
  templateUrl: './button-with-loading.component.html',
  styleUrls: ['./button-with-loading.component.css']
})
export class ButtonWithLoadingComponent implements OnInit {
  @Input() label! :string;
  @Input() loading!:boolean;
  constructor() { }


  ngOnInit(): void {
  }

}
