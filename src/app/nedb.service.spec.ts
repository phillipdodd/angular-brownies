import { TestBed } from '@angular/core/testing';

import { NedbService } from './nedb.service';

describe('NedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NedbService = TestBed.get(NedbService);
    expect(service).toBeTruthy();
  });
});
