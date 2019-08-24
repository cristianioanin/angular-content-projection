import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProjectContentComponent } from './multiple-project-content.component';

describe('MultipleProjectContentComponent', () => {
  let component: MultipleProjectContentComponent;
  let fixture: ComponentFixture<MultipleProjectContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleProjectContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleProjectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
