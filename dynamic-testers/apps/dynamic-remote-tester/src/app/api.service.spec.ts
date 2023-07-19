import { TestBed } from '@angular/core/testing';

import { ApiVersion2Service } from './api.service';

describe('ApiService', () => {
  let service: ApiVersion2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVersion2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
