import { TestBed } from '@angular/core/testing';

import { SpeechRecognitionService } from './speech-recognition.service';

describe('SpeechRecognitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SpeechRecognitionService]
  }));

  it('should be created', () => {
    const service: SpeechRecognitionService = TestBed.get(SpeechRecognitionService);
    expect(service).toBeTruthy();
  });
});
