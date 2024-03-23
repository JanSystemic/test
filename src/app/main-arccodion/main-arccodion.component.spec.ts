import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArccodionComponent } from './main-arccodion.component';

describe('MainArccodionComponent', () => {
  let component: MainArccodionComponent;
  let fixture: ComponentFixture<MainArccodionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainArccodionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainArccodionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
