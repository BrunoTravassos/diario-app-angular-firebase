import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiarioComponent } from './add-diario.component';

describe('AddDiarioComponent', () => {
  let component: AddDiarioComponent;
  let fixture: ComponentFixture<AddDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
