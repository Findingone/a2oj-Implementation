import { TestBed } from '@angular/core/testing';

import { SolvedFinderService } from './solved-finder.service';

describe('SolvedFinderService', () => {
  let service: SolvedFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolvedFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
