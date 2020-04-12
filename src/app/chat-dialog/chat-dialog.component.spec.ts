import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDialogComponent } from './chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';
import { SpeechRecognitionService } from 'src/app/speech-recognition.service';
declare var Jquery: any;

describe('ChatDialogComponent', () => {
  let component: ChatDialogComponent;
  let fixture: ComponentFixture<ChatDialogComponent>;
  let speechRecognitionSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ChatDialogComponent ],
      providers: [ChatService, SpeechRecognitionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDialogComponent);
    component = fixture.componentInstance;
    speechRecognitionSpy = spyOn(component.speechRecognitionService, 'DestroySpeechObject').and.callThrough();
    component.messagesToDisplay = [{content: '', sentBy: ''}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Test Activate speech search', () => {
    component.activateSpeechSearch();
    expect(component.startListenButton).toBe(false);
  });
  it('Test sendMessageFromSpeechRecognition ', () => {
    component.sendMessageFromSpeechRecognition();
    expect(speechRecognitionSpy).toHaveBeenCalledTimes(1);
  });
});
