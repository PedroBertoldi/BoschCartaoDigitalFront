import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPublicaIndicarComponent } from './area-publica-indicar.component';

describe('AreaPublicaIndicarComponent', () => {
  let component: AreaPublicaIndicarComponent;
  let fixture: ComponentFixture<AreaPublicaIndicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPublicaIndicarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPublicaIndicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
