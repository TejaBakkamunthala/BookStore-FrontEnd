import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneBookComponent } from './display-one-book.component';

describe('DisplayOneBookComponent', () => {
  let component: DisplayOneBookComponent;
  let fixture: ComponentFixture<DisplayOneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayOneBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayOneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
