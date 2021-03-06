import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class PopupServiceService {
  synth: SpeechSynthesis;
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  // Sends and receives messages via DialogFlow
  converse(msg: string, isWelcomeIntent?: boolean) {
    if  (!isWelcomeIntent) {
      const userMessage = new Message(msg, 'user');
      this.update(userMessage);
    }
    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }



  // Adds message to source
  update(msg: Message) {
    console.log('Conversation updated');
    this.conversation.next([msg]);
    // if (msg.sentBy === 'bot') {
    //   this.synthVoice(msg.content);
    // }
  }

  synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }
}
