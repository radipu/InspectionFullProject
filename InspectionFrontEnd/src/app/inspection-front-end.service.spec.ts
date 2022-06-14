import { TestBed } from '@angular/core/testing';

import { InspectionFrontEndService } from './inspection-front-end.service';

describe('InspectionFrontEndService', () => {
  let service: InspectionFrontEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionFrontEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
