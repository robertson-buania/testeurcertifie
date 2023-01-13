import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintsyntheseComponent } from './printsynthese.component';

describe('PrintsyntheseComponent', () => {
  let component: PrintsyntheseComponent;
  let fixture: ComponentFixture<PrintsyntheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintsyntheseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintsyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
