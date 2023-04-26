import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGenComponent } from './work-gen.component';

describe('WorkGenComponent', () => {
  let component: WorkGenComponent;
  let fixture: ComponentFixture<WorkGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
