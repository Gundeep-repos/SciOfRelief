import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';


import { FirstPageComponent } from './first-page/first-page.component';
import { SeconPageComponent } from './secon-page/secon-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { RecommendationScreenComponent } from './recommendation-screen/recommendation-screen.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tabView', component: TabViewComponent },
  { path: 'chat', component: ChatDialogComponent },
  { path: 'first', component: FirstPageComponent },
  { path: 'secon', component: SeconPageComponent },
  { path: 'third', component: ThirdPageComponent },
  { path: 'recommendation', component: RecommendationScreenComponent },
  { path: 'questionDetails', component: QuestionDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
