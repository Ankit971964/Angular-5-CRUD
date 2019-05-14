import { TestBed } from '@angular/core/testing';

import { WSRServiceService } from './app/wsrservice.service';

describe('WSRServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WSRServiceService = TestBed.get(WSRServiceService);
    expect(service).toBeTruthy();
  });
});
