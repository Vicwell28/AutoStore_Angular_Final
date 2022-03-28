import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVehiculoListComponent } from './detalle-vehiculo-list.component';

describe('DetalleVehiculoListComponent', () => {
  let component: DetalleVehiculoListComponent;
  let fixture: ComponentFixture<DetalleVehiculoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVehiculoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVehiculoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
