import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministrativaCadastroBeneficiariosComponent } from './area-administrativa-cadastro-beneficiarios.component';

describe('AreaAdministrativaCadastroBeneficiariosComponent', () => {
  let component: AreaAdministrativaCadastroBeneficiariosComponent;
  let fixture: ComponentFixture<AreaAdministrativaCadastroBeneficiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministrativaCadastroBeneficiariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministrativaCadastroBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
