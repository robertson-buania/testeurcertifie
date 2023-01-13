import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazoutComponent } from './mazout.component';

describe('MazoutComponent', () => {
  let component: MazoutComponent;
  let fixture: ComponentFixture<MazoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MazoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
