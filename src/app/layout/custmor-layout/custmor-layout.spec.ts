import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmorLayout } from './custmor-layout';

describe('CustmorLayout', () => {
  let component: CustmorLayout;
  let fixture: ComponentFixture<CustmorLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustmorLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmorLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
