import { Component, OnInit, ViewChildren } from '@angular/core';
import { ThirdPageComponent } from '../third-page/third-page.component';
import { FourthPageComponent } from '../fourth-page/fourth-page.component';
import { FifthPageComponent } from '../fifth-page/fifth-page.component';
import { LifeProblemsData, AcademicsData, MentalHealthData } from '../project-models';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {
  lifeProblemsData: LifeProblemsData;
  academicsData: AcademicsData;
  mentalHealthData: MentalHealthData;
  showRecommendation = false;
  disableRecommendationButton = true;

  getThirdPageData(event: LifeProblemsData) {
    if (!isNullOrUndefined(event)) {
      this.lifeProblemsData = event;
      this.disableRecommendationButton = false;
    }
  }

  getFourthPageData(event: AcademicsData) {
    if (!isNullOrUndefined(event)) {
      this.academicsData = event;
      this.disableRecommendationButton = false;
    }
  }

  getFifthPageData(event: MentalHealthData) {
    if (!isNullOrUndefined(event)) {
      this.mentalHealthData = event;
      this.disableRecommendationButton = false;
    }
  }

  ngOnInit() { }

  showRecommendations() {
    this.showRecommendation = true;
  }

}
