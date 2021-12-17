import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarAvisComponent } from './star-avis.component';

describe('StarAvisComponent', () => {
  let component: StarAvisComponent;
  let fixture: ComponentFixture<StarAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarAvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
