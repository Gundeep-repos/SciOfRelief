import { Injectable } from '@angular/core';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  // Sends and receives messages via DialogFlow
  converse(msg: string, fromSpeech: boolean, isWelcomeIntent?: boolean) {
    if (!isWelcomeIntent) {
      const userMessage = new Message(msg, 'user');
      this.update(userMessage, fromSpeech);
    }

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage, fromSpeech);
      });
  }

  reset() {
    return new Message('', '');
  }



  // Adds message to source
  update(msg: Message, fromSpeech: boolean) {
    this.conversation.next([msg]);
    console.log(msg);
    if (msg.sentBy === 'bot' && fromSpeech) {
      this.synthVoice(msg.content);
    }
  }

  // add voice to response
  synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }

}
