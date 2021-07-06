import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseMoviesComponent } from './else-movies.component';

describe('ElseMoviesComponent', () => {
  let component: ElseMoviesComponent;
  let fixture: ComponentFixture<ElseMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElseMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElseMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
