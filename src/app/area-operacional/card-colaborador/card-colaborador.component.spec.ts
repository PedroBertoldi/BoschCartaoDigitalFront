import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColaboradorComponent } from './card-colaborador.component';

describe('CardColaboradorComponent', () => {
  let component: CardColaboradorComponent;
  let fixture: ComponentFixture<CardColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
