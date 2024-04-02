import { TestBed, inject } from '@angular/core/testing';

import { PartyordersService } from './partyorders.service';

describe('PartyordersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartyordersService]
    });
  });

  it('should be created', inject([PartyordersService], (service: PartyordersService) => {
    expect(service).toBeTruthy();
  }));
});
