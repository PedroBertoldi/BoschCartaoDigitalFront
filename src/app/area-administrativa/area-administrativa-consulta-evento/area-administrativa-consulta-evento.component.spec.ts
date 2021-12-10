import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministrativaConsultaEventoComponent } from './area-administrativa-consulta-evento.component';

describe('AreaAdministrativaConsultaEventoComponent', () => {
  let component: AreaAdministrativaConsultaEventoComponent;
  let fixture: ComponentFixture<AreaAdministrativaConsultaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministrativaConsultaEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministrativaConsultaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
