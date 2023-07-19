import { TestBed } from '@angular/core/testing';

import { DynamicTestService } from './dynamic-test.service';

describe('DynamicTestService', () => {
  let service: DynamicTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
