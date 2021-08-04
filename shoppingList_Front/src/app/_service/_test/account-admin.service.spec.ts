import { TestBed } from '@angular/core/testing';

import { AccountAdminService } from '../account-admin.service';

describe('AccountAdminService', () => {
  let service: AccountAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
