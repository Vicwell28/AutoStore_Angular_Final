import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCompraListComponent } from './carrito-compra-list.component';

describe('CarritoCompraListComponent', () => {
  let component: CarritoCompraListComponent;
  let fixture: ComponentFixture<CarritoCompraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoCompraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCompraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
