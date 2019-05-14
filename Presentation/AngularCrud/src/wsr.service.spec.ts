import { TestBed } from '@angular/core/testing';

import { WSRService } from './wsr.service';

describe('WSRService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WSRService = TestBed.get(WSRService);
    expect(service).toBeTruthy();
  });
});
