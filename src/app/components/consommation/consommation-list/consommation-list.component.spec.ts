import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationListComponent } from './consommation-list.component';

describe('ConsommationListComponent', () => {
  let component: ConsommationListComponent;
  let fixture: ComponentFixture<ConsommationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
