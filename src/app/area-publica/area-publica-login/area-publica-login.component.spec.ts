import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPublicaLoginComponent } from './area-publica-login.component';

describe('AreaPublicaLoginComponent', () => {
  let component: AreaPublicaLoginComponent;
  let fixture: ComponentFixture<AreaPublicaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaPublicaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPublicaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
