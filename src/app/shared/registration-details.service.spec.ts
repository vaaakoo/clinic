import { TestBed } from '@angular/core/testing';

import { RegistrationDetailsService } from './registration-details.service';

describe('RegistrationDetailsService', () => {
  let service: RegistrationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
