import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiarioComponent } from './edit-diario.component';

describe('EditDiarioComponent', () => {
  let component: EditDiarioComponent;
  let fixture: ComponentFixture<EditDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
