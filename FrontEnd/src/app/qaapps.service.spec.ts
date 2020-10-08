import { TestBed } from '@angular/core/testing';

import { QAAppsService } from './qaapps.service';

describe('QAAppsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QAAppsService = TestBed.get(QAAppsService);
    expect(service).toBeTruthy();
  });
});
