import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnComponent } from './three-column.component';

describe('ThreeColumnComponent', () => {
  let component: ThreeColumnComponent;
  let fixture: ComponentFixture<ThreeColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
