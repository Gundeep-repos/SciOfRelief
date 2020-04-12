import {
  Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit,
  ChangeDetectorRef, OnChanges
} from '@angular/core';
import { Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { PopupServiceService } from '../popup.service';
import { isNullOrUndefined } from 'util';
declare var jQuery: any;


@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss']
})
export class ChatPopupComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChildren('messageList') messageList: QueryList<any>;
  @ViewChild('content', undefined) content: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;
  chatVisible = true;
  startListenButton: boolean;
  speechData: string;
  isPopupOpened: boolean;
  messagesToDisplay: Message[];

  constructor(public chat: PopupServiceService, public speechRecognitionService: SpeechRecognitionService,
              private cd: ChangeDetectorRef) { }

  welcomeIntent = true;
  ngOnInit() {
    console.log('Chat popup initialized');
    this.startListenButton = true;
    this.isPopupOpened = false;
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val))
    );
    if (this.welcomeIntent) {
      this.chat.converse('Hi', this.welcomeIntent);
    }
    this.messages.subscribe(messageResponse => {
      this.messagesToDisplay = messageResponse;
    });
    this.welcomeIntent = false;
    // tslint:disable-next-line:only-arrow-functions
    (function($) {
      // tslint:disable-next-line:only-arrow-functions
      $(document).ready(function() {
        $('.slideOnClick').hide();
        // tslint:disable-next-line:only-arrow-functions
        $('.chat_header').unbind('click').click(function() {
          // this.isPopupOpened = !this.isPopupOpened;
          $('.slideOnClick').slideToggle('slow');
        });
      });
    })(jQuery);
  }

  ngAfterViewInit() {
    this.messageList.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngOnChanges() {
    this.cd.detectChanges();
  }

  activateSpeechSearch(): void {
    this.startListenButton = false;

    this.speechRecognitionService.record()
      .subscribe(
        // listener
        (value) => {
          this.speechData = value;
          this.formValue = value;
        },
        // error
        (err) => {
          if (err.error === 'no-speech') {
            this.speakError();
          }
        },
        // completion
        () => {
          this.startListenButton = true;
          if (this.formValue !== '' && !isNullOrUndefined(this.formValue)) {
            this.sendMessageFromSpeechRecognition();
          } else {
            this.speakError();
          }
        });
  }


  speakError() {
    this.startListenButton = true;
    this.speechRecognitionService.DestroySpeechObject();
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = 'I am sorry! Can you please type or tell that one more time after pressing the microphone button?';
    synth.speak(utterance);
    this.cd.detectChanges();
  }

  sendMessageFromSpeechRecognition(): void {
    this.speechRecognitionService.DestroySpeechObject();
    this.sendMessage();
  }

  sendMessage() {
    if (this.formValue !== undefined && this.formValue.trim() !== '') {
      this.chat.converse(this.formValue);
      this.formValue = '';
      this.cd.detectChanges();
    }
  }

}
