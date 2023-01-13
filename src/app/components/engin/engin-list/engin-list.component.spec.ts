import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginListComponent } from './engin-list.component';

describe('EnginListComponent', () => {
  let component: EnginListComponent;
  let fixture: ComponentFixture<EnginListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
