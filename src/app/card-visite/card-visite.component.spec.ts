import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisiteComponent } from './card-visite.component';

describe('CardVisiteComponent', () => {
  let component: CardVisiteComponent;
  let fixture: ComponentFixture<CardVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVisiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
