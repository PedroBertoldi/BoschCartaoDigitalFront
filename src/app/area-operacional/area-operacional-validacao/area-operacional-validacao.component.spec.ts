import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOperacionalValidacaoComponent } from './area-operacional-validacao.component';

describe('AreaOperacionalValidacaoComponent', () => {
  let component: AreaOperacionalValidacaoComponent;
  let fixture: ComponentFixture<AreaOperacionalValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOperacionalValidacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOperacionalValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
