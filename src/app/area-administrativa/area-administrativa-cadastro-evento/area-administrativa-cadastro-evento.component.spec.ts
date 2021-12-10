import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministrativaCadastroEventoComponent } from './area-administrativa-cadastro-evento.component';

describe('AreaAdministrativaCadastroEventoComponent', () => {
  let component: AreaAdministrativaCadastroEventoComponent;
  let fixture: ComponentFixture<AreaAdministrativaCadastroEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministrativaCadastroEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministrativaCadastroEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
