import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationItemComponent } from './consommation-item.component';

describe('ConsommationItemComponent', () => {
  let component: ConsommationItemComponent;
  let fixture: ComponentFixture<ConsommationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
