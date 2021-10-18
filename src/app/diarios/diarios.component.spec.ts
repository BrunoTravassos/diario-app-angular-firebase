import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariosComponent } from './diarios.component';

describe('DiariosComponent', () => {
  let component: DiariosComponent;
  let fixture: ComponentFixture<DiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
