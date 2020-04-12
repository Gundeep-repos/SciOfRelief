import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPopupComponent } from './chat-popup.component';
import { FormsModule } from '@angular/forms';
import { PopupServiceService } from '../popup.service';
import { SpeechRecognitionService } from '../speech-recognition.service';
declare var jQuery: any;

describe('ChatPopupComponent', () => {
  let component: ChatPopupComponent;
  let fixture: ComponentFixture<ChatPopupComponent>;
  let speechRecognitionSpy;
  let chatServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ ChatPopupComponent ],
      providers: [PopupServiceService, SpeechRecognitionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPopupComponent);
    component = fixture.componentInstance;
    speechRecognitionSpy = spyOn(component.speechRecognitionService, 'DestroySpeechObject').and.callThrough();
    chatServiceSpy = spyOn(component.chat, 'converse').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Test Activate speech search', () => {
    component.activateSpeechSearch();
    expect(component.startListenButton).toBe(false);
  });
});
