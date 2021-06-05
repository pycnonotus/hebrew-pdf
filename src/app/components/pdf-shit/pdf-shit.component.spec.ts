/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfShitComponent } from './pdf-shit.component';

describe('PdfShitComponent', () => {
  let component: PdfShitComponent;
  let fixture: ComponentFixture<PdfShitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfShitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfShitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
