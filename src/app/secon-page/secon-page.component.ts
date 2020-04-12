import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-secon-page',
  templateUrl: './secon-page.component.html',
  styleUrls: ['./secon-page.component.scss']
})
export class SeconPageComponent implements OnInit {
  stressRate: number;
  finalStressRate: number;

  nextClicked() {
    this.finalStressRate = this.stressRate;
  }

  constructor() { }

  ngOnInit() {
  }

}
