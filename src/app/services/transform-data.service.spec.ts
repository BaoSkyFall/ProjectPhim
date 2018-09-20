import { TestBed, inject } from '@angular/core/testing';

import { TransformDataService } from './transform-data.service';

describe('TransformDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformDataService]
    });
  });

  it('should be created', inject([TransformDataService], (service: TransformDataService) => {
    expect(service).toBeTruthy();
  }));
});
