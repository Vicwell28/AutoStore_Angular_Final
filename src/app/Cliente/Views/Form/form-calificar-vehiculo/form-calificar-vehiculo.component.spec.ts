import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalificarVehiculoComponent } from './form-calificar-vehiculo.component';

describe('FormCalificarVehiculoComponent', () => {
  let component: FormCalificarVehiculoComponent;
  let fixture: ComponentFixture<FormCalificarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCalificarVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalificarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
