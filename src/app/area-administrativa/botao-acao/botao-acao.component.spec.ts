import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAcaoComponent } from './botao-acao.component';

describe('BotaoAcaoComponent', () => {
  let component: BotaoAcaoComponent;
  let fixture: ComponentFixture<BotaoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
