import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullShitComponent } from './bull-shit.component';

describe('BullShitComponent', () => {
  let component: BullShitComponent;
  let fixture: ComponentFixture<BullShitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullShitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullShitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
