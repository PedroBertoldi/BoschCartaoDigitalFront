import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFlutuanteComponent } from './botao-flutuante.component';

describe('BotaoFlutuanteComponent', () => {
  let component: BotaoFlutuanteComponent;
  let fixture: ComponentFixture<BotaoFlutuanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoFlutuanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoFlutuanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
