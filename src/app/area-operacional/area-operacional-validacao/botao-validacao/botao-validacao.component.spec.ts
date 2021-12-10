import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoValidacaoComponent } from './botao-validacao.component';

describe('BotaoValidacaoComponent', () => {
  let component: BotaoValidacaoComponent;
  let fixture: ComponentFixture<BotaoValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoValidacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
