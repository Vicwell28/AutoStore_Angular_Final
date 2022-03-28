import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmicionFormComponent } from './transmicion-form.component';

describe('TransmicionFormComponent', () => {
  let component: TransmicionFormComponent;
  let fixture: ComponentFixture<TransmicionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmicionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmicionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
