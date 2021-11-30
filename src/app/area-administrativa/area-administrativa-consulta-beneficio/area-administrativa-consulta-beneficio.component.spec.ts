import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministrativaConsultaBeneficioComponent } from './area-administrativa-consulta-beneficio.component';

describe('AreaAdministrativaConsultaBeneficioComponent', () => {
  let component: AreaAdministrativaConsultaBeneficioComponent;
  let fixture: ComponentFixture<AreaAdministrativaConsultaBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministrativaConsultaBeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministrativaConsultaBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
