import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoClienteListComponent } from './apartado-cliente-list.component';

describe('ApartadoClienteListComponent', () => {
  let component: ApartadoClienteListComponent;
  let fixture: ComponentFixture<ApartadoClienteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoClienteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartadoClienteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
