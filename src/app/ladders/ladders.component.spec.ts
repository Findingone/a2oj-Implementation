import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddersComponent } from './ladders.component';

describe('LaddersComponent', () => {
  let component: LaddersComponent;
  let fixture: ComponentFixture<LaddersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaddersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
