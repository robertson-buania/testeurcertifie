import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginEditComponent } from './engin-edit.component';

describe('EnginEditComponent', () => {
  let component: EnginEditComponent;
  let fixture: ComponentFixture<EnginEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnginEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
