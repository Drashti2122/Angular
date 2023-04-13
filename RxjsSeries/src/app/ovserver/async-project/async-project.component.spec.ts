import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncProjectComponent } from './async-project.component';

describe('AsyncProjectComponent', () => {
  let component: AsyncProjectComponent;
  let fixture: ComponentFixture<AsyncProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
