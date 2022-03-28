import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmicionListComponent } from './transmicion-list.component';

describe('TransmicionListComponent', () => {
  let component: TransmicionListComponent;
  let fixture: ComponentFixture<TransmicionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmicionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmicionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
