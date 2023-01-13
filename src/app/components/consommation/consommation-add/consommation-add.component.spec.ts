import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationAddComponent } from './consommation-add.component';

describe('ConsommationAddComponent', () => {
  let component: ConsommationAddComponent;
  let fixture: ComponentFixture<ConsommationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
