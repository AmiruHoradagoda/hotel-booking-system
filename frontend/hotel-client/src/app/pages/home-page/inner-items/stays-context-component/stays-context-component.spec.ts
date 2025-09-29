import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysContextComponent } from './stays-context-component';

describe('StaysContextComponent', () => {
  let component: StaysContextComponent;
  let fixture: ComponentFixture<StaysContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaysContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
