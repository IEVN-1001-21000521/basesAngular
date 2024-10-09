import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SodiacoComponent } from './sodiaco.component';

describe('SodiacoComponent', () => {
  let component: SodiacoComponent;
  let fixture: ComponentFixture<SodiacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SodiacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SodiacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
