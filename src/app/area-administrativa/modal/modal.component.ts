import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() aberto!: boolean;
  @Input() tipoModal: 'atencao' | 'confirmacao' = 'confirmacao'
  @Output() fecharModal = new EventEmitter()
  @Output() confirmarData = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
