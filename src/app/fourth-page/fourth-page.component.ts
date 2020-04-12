import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AcademicsData } from '../project-models';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss']
})
export class FourthPageComponent implements OnInit {
  @Output() fourthPageData = new EventEmitter<AcademicsData>();
  academicsData: AcademicsData;
  anxietyProblem = '';
  finalAnxietyProblem: string;

  workloadProblem = '';
  finalWorkloadProblem: string;

  gradesProblem = '';
  finalGradesProblem: string;

  staffProblem = '';
  finalStaffProblem: string;

  anxietySchool = '';
  finalAnxietySchool: string;


  numb = ['0 = not at all', '1 = somewhat', '2 = quite a bit', '3 = extremely'];

  nextClicked() {
    this.academicsData = {
      finalAnxietyProblem: this.anxietyProblem,
      finalWorkloadProblem: this.workloadProblem,
      finalGradesProblem: this.gradesProblem,
      finalStaffProblem: this.staffProblem,
      finalAnxietySchool: this.anxietySchool
    };
    this.fourthPageData.emit(this.academicsData);

  }
  constructor() { }

  ngOnInit() {
  }

}
