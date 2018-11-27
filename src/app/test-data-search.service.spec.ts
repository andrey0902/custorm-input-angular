import { TestBed } from '@angular/core/testing';

import { TestDataSearchService } from './test-data-search.service';

describe('TestDataSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestDataSearchService = TestBed.get(TestDataSearchService);
    expect(service).toBeTruthy();
  });
});
