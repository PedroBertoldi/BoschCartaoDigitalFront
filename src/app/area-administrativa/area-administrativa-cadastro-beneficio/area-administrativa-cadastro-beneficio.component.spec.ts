import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministrativaCadastroBeneficioComponent } from './area-administrativa-cadastro-beneficio.component';

describe('AreaAdministrativaCadastroBeneficioComponent', () => {
  let component: AreaAdministrativaCadastroBeneficioComponent;
  let fixture: ComponentFixture<AreaAdministrativaCadastroBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministrativaCadastroBeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministrativaCadastroBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
