import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransmicionComponent } from './edit-transmicion.component';

describe('EditTransmicionComponent', () => {
  let component: EditTransmicionComponent;
  let fixture: ComponentFixture<EditTransmicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransmicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransmicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
