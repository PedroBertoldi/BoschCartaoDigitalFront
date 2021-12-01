import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAdministrativaConsultaBeneficiarioComponent } from './area-administrativa-consulta-beneficiario.component';

describe('AreaAdministrativaConsultaBeneficiarioComponent', () => {
  let component: AreaAdministrativaConsultaBeneficiarioComponent;
  let fixture: ComponentFixture<AreaAdministrativaConsultaBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaAdministrativaConsultaBeneficiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAdministrativaConsultaBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
