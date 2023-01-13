import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonAddComponent } from './livraison-add.component';

describe('LivraisonAddComponent', () => {
  let component: LivraisonAddComponent;
  let fixture: ComponentFixture<LivraisonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
