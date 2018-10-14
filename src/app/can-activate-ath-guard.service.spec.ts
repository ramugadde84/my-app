import { TestBed } from '@angular/core/testing';

import { CanActivateAthGuardService } from './can-activate-ath-guard.service';

describe('CanActivateAthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateAthGuardService = TestBed.get(CanActivateAthGuardService);
    expect(service).toBeTruthy();
  });
});
