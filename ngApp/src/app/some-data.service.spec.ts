import { TestBed } from '@angular/core/testing';

import { SomeDataService } from './some-data.service';

describe('SomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeDataService = TestBed.get(SomeDataService);
    expect(service).toBeTruthy();
  });
});
