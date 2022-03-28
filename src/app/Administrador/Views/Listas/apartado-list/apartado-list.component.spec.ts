import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoListComponent } from './apartado-list.component';

describe('ApartadoListComponent', () => {
  let component: ApartadoListComponent;
  let fixture: ComponentFixture<ApartadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
