import { TestBed } from '@angular/core/testing';

import { ImpApiService } from './imp-api.service';

describe('ImpApiService', () => {
  let service: ImpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
