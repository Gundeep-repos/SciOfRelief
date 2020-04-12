import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LifeProblemsData } from '../project-models';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent implements OnInit {
  @Output() thirdPageData = new EventEmitter<LifeProblemsData>();
  lifeProblemsData: LifeProblemsData;
  houseProb = '';
  houseProb2 = '';
  finalHouseProblem: string;
  finalHouseProblem2: string;

  legalIssue = '';
  finalLegalIssue: string;

  interPersonal = '';
  interPersonal2 = '';
  finalInterPersonal: string;
  finalInterPersonal2: string;

  financialProb = '';
  finalFinancialProblem: string;

  sexualAbuse = '';
  sexualAbuse2 = '';
  sexualAbuse3 = '';
  finalSexualAbuse: string;
  finalSexualAbuse2: string;
  finalSexualAbuse3: string;

  physicalAbuse = '';
  physicalAbuse2 = '';
  physicalAbuse3 = '';
  finalPhysicalAbuse: string;
  finalPhysicalAbuse2: string;
  finalPhysicalAbuse3: string;


  griefLoss = '';
  griefLoss2 = '';
  finalGriefLoss: string;
  finalGriefLoss2: string;

  phIssues = '';
  finalPhysicalHeaalthIssue: string;

  dProb = '';
  finalDiscriminationProblem: string;

  foodProb = '';
  finalFoddProblem: string;

  townProb = '';
  finalTownProbelm: string;

  numb = ['0 = not at all', '1 = somewhat', '2 = quite a bit', '3 = extremely'];

  nextClicked() {
    this.lifeProblemsData = {
      finalHouseProblem: this.houseProb,
      finalHouseProblem2: this.houseProb2,
      finalLegalIssue: this.legalIssue,
      finalInterPersonal: this.interPersonal,
      finalInterPersonal2: this.interPersonal2,
      finalFinancialProblem: this.financialProb,
      finalSexualAbuse: this.sexualAbuse,
      finalSexualAbuse2: this.sexualAbuse2,
      finalSexualAbuse3: this.sexualAbuse3,
      finalPhysicalAbuse: this.physicalAbuse,
      finalPhysicalAbuse2: this.physicalAbuse2,
      finalPhysicalAbuse3: this.physicalAbuse3,
      finalGriefLoss: this.griefLoss,
      finalGriefLoss2: this.griefLoss2,
      finalPhysicalHeaalthIssue: this.phIssues,
      finalDiscriminationProblem: this.dProb,
      finalFoddProblem: this.foodProb,
      finalTownProbelm: this.townProb
    };
    this.thirdPageData.emit(this.lifeProblemsData);
  }
  constructor() { }

  ngOnInit() {
  }

}
