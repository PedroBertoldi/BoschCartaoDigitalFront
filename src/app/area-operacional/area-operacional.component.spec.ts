import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOperacionalComponent } from './area-operacional.component';

describe('AreaOperacionalComponent', () => {
  let component: AreaOperacionalComponent;
  let fixture: ComponentFixture<AreaOperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOperacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
