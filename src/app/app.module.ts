import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { SeconPageComponent } from './secon-page/secon-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { AngularMaterialModule } from './angular-material.module';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { ChatService } from './chat.service';
import { PopupServiceService } from './popup.service';
import { RecommendationScreenComponent } from './recommendation-screen/recommendation-screen.component';
import { SpeechRecognitionService } from './speech-recognition.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { ChatPopupComponent } from './chat-popup/chat-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LandingpageComponent,
    FooterComponent,
    FirstPageComponent,
    SeconPageComponent,
    ThirdPageComponent,
    TabViewComponent,
    FourthPageComponent,
    FifthPageComponent,
    ChatPopupComponent,
    RecommendationScreenComponent,
    ChatDialogComponent,
    QuestionDetailsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [ChatService, PopupServiceService, SpeechRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
