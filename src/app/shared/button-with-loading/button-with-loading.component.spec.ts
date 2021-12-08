import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithLoadingComponent } from './button-with-loading.component';

describe('ButtonWithLoadingComponent', () => {
  let component: ButtonWithLoadingComponent;
  let fixture: ComponentFixture<ButtonWithLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
