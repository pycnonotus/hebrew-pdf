import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullShitMoreComponent } from './bull-shit-more.component';

describe('BullShitMoreComponent', () => {
  let component: BullShitMoreComponent;
  let fixture: ComponentFixture<BullShitMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullShitMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullShitMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
