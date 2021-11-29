import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioTableComponent } from './beneficio-table.component';

describe('BeneficioTableComponent', () => {
  let component: BeneficioTableComponent;
  let fixture: ComponentFixture<BeneficioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficioTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
