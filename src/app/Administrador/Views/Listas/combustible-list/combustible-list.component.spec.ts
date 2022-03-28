import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustibleListComponent } from './combustible-list.component';

describe('CombustibleListComponent', () => {
  let component: CombustibleListComponent;
  let fixture: ComponentFixture<CombustibleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustibleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustibleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
