import { Component, OnInit, AfterViewInit, ViewChildren, ViewChild, ElementRef, QueryList, OnDestroy } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
import { SpeechRecognitionService } from 'src/app/speech-recognition.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('messageList') messageList: QueryList<any>;
  @ViewChild('content', undefined) content: ElementRef;

  messages: Observable<Message[]>;
  formValue: string;
  startListenButton: boolean;
  speechData: string;
  messagesToDisplay: Message[];
  fromSpeech = false;
  welcomeIntent = true;

  constructor(public chat: ChatService, public speechRecognitionService: SpeechRecognitionService) { }

  ngOnInit() {
    if (this.welcomeIntent) {
      this.chat.converse('Hi', this.fromSpeech, this.welcomeIntent);
    }
    this.startListenButton = true;
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val))
    );

    this.messages.subscribe(messageResponse => {
      console.log('Subscription', messageResponse);
      this.messagesToDisplay = messageResponse;
    });
    this.welcomeIntent = false;
  }

  activateSpeechSearch(): void {
    this.startListenButton = false;
    this.fromSpeech = true;

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
          this.sendMessageFromSpeechRecognition();
          // if (!this.stopListeningButton) {
          //   this.activateSpeechSearch();
          // }

        });
  }

  speakError() {
    this.startListenButton = true;
    this.speechRecognitionService.DestroySpeechObject();
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = 'I am sorry! Can you please type or tell that one more time after pressing the microphone button?';
    synth.speak(utterance);
    // this.cd.detectChanges();
  }


  sendMessageFromSpeechRecognition(): void {
    this.speechRecognitionService.DestroySpeechObject();
    // this.sendMessage();
    // setTimeout(() => {
    //   console.log('clicking');
    //   this.sendMessage();
    // }, 8000);
    // let element: HTMLElement = this.sendButtonRef.nativeElement as HTMLElement;
    // element.click();
  }

  ngAfterViewInit() {
    this.messageList.changes.subscribe(this.scrollToBottom);
  }

  scrollToBottom = () => {
    try {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMessage() {
    if (this.formValue !== undefined && this.formValue.trim() !== '') {
      this.chat.converse(this.formValue, this.fromSpeech);
      // this.setListener();
      this.messages.subscribe(val => console.log('component amy 1', val));
      // WIP: doesnt work. Still listens to itself
      let robotResponse: any;
      this.messages.subscribe(val => {
        robotResponse = val;
        const total = (robotResponse.length - 1) < 0 ? 0 : robotResponse.length - 1;
        let lastRobotResponse;
        lastRobotResponse = robotResponse[total];
        // if (total === 1 && lastRobotResponse.sentBy === 'bot') {
        //   if (this.startListenButton) {
        //     console.log('rbot activating speech');
        //     this.activateSpeechSearch();
        //   }
        // }
      });
      this.formValue = '';
    }

  }

  ngOnDestroy() {
    // Todo: Empty messages
    this.messagesToDisplay.map(message => {
      message.content = '';
      message.sentBy = '';
    });
  }

}
