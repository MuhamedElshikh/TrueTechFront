import { TestBed } from '@angular/core/testing';

import { Authservises } from './authservises';

describe('Authservises', () => {
  let service: Authservises;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authservises);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
