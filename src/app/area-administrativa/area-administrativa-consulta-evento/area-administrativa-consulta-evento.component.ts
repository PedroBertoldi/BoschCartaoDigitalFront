import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { EventoService } from 'src/app/services/evento.service';

interface Evento {
  id: number,
  nome: string,
  dataInicio: Date,
  dataFim: Date,
  ativo: boolean,
}

@Component({
  selector: 'app-area-administrativa-consulta-evento',
  templateUrl: './area-administrativa-consulta-evento.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-evento.component.css']
})
export class AreaAdministrativaConsultaEventoComponent implements OnInit {

  eventos: Evento[] = []

  eventosBuscados: Evento[] = []

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.updateList();
  }
  
  updateList(){
    this.eventoService.getEventos().pipe(first()).subscribe(
      data => {
          this.eventos = data.map((evento: any) => {
            let hoje = new Date
            hoje.setDate(hoje.getDate()-1)

            return {
              id: evento.id,
              nome: evento.nome,
              dataInicio: new Date(evento.dataInicio),
              dataFim: new Date(evento.dataFim),
              ativo: hoje < new Date(evento.dataFim),
            }
          })
          this.eventosBuscados = this.eventos
      });
  }

  deleteEvento(evento:any){
    this.eventoService.deleteEvento(evento.id).pipe(first()).subscribe(data=>{
        this.updateList();
    })
  }

  buscar(valor: string): void {
    if(valor !== '') {
      this.eventosBuscados = this.eventos.filter(evento => evento.nome.toLowerCase().includes(valor.toLowerCase()) )
    }
  }
  
  limpar(): void {
    this.eventosBuscados = this.eventos
  }

}
