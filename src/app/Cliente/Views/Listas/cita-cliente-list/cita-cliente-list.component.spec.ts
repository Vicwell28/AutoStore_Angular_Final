import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaClienteListComponent } from './cita-cliente-list.component';

describe('CitaClienteListComponent', () => {
  let component: CitaClienteListComponent;
  let fixture: ComponentFixture<CitaClienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaClienteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
