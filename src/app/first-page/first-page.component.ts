import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  genders = [];
  genderSelected: string;
  finalGenderSelected: string;

  programSelected = '';
  finalProgramSelected: string;

  levelSelected = '';
  finalLevelSelected: string;

  yearSelected = '';
  finalYearSelected: string;

  sexualorientation = ['Hetrosexual/Straight', 'Lesbian',
    'Gay', 'Bisexual', 'Queer', 'Asexual', 'Pansexual',
    'Other', 'Prefer not to say'];
  orientationSelected: string;
  finalOrientationSelected: string;

  studenttype = ['Yes', 'No', 'Prefer not to say'];
  studentTypeSelected: string;
  finalStudentTypeSelected: string;

  nextClicked() {
    this.finalGenderSelected = this.genderSelected;
    this.finalLevelSelected = this.levelSelected;
    this.finalOrientationSelected = this.orientationSelected;
    this.finalProgramSelected = this.programSelected;
    this.finalStudentTypeSelected = this.studentTypeSelected;
    this.finalYearSelected = this.yearSelected;
  }



  constructor() { }

  ngOnInit() {
    this.genders = ['Male', 'Female', 'Gender diverse', 'Prefer not to say'];
  }

}
