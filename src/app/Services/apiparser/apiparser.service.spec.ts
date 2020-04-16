import { TestBed } from '@angular/core/testing';

import { ApiparserService } from './apiparser.service';

describe('ApiparserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiparserService = TestBed.get(ApiparserService);
    expect(service).toBeTruthy();
  });
});
