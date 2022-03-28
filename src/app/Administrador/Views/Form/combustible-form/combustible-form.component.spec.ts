import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustibleFormComponent } from './combustible-form.component';

describe('CombustibleFormComponent', () => {
  let component: CombustibleFormComponent;
  let fixture: ComponentFixture<CombustibleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustibleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
