import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MentalHealthData } from '../project-models';

@Component({
    selector: 'app-fifth-page',
    templateUrl: './fifth-page.component.html',
    styleUrls: ['./fifth-page.component.scss']
})
export class FifthPageComponent implements OnInit {
    @Output() fifthPageData = new EventEmitter<MentalHealthData>();
    mentalHealthData: MentalHealthData;
    lowMood = '';
    lowMood2 = '';
    finalLowMood: string;
    finalLowMood2: string;

    selfHarm = '';
    selfHarm2 = '';
    selfHarm3 = '';
    finalSelfHarm: string;
    finalSelfHarm2: string;
    finalSelfHarm3: string;



    excessiveWorry = '';
    excessiveWorry2 = '';
    finalExcessiveWorry: string;
    finalExcessiveWorry2: string;




    anger = '';
    anger2 = '';
    finalAnger: string;
    finalAnger2: string;



    disorderEating = '';
    disorderEating2 = '';
    finaldisorderEating: string;
    finaldisorderEating2: string;


    sleepingDifficulty = '';
    sleepingDifficulty2 = '';
    finalSleepingDifficulty: string;
    finalSleepingDifficulty2: string;


    overuseAlcohol = '';
    overuseAlcohol2 = '';
    finalOveruseAlcohol: string;
    finalOveruseAlcohol2: string;

    personalAppearance = '';
    personalAppearance2 = '';
    finalPersonalApperance: string;
    finalPersonalApperance2: string;



    traumaticSymptoms = '';
    traumaticSymptoms2 = '';
    finalTraumaticSymptoms: string;
    finalTraumaticSymptoms2: string;



    loneliness = '';
    loneliness2 = '';
    loneliness3 = '';
    finalLoneliness: string;
    finalLoneliness2: string;
    finalLoneliness3: string;


    numb = ['0 = not at all', '1 = somewhat', '2 = quite a bit', '3 = extremely'];

    nextClicked() {
        this.mentalHealthData = {
            finalLowMood: this.lowMood,
            finalLowMood2: this.lowMood2,
            finalSelfHarm: this.selfHarm,
            finalSelfHarm2: this.selfHarm2,
            finalSelfHarm3: this.selfHarm3,
            finalExcessiveWorry: this.excessiveWorry,
            finalExcessiveWorry2: this.excessiveWorry2,
            finalAnger: this.anger,
            finalAnger2: this.anger2,
            finaldisorderEating: this.disorderEating,
            finaldisorderEating2: this.disorderEating2,
            finalSleepingDifficulty: this.sleepingDifficulty,
            finalSleepingDifficulty2: this.sleepingDifficulty2,
            finalOveruseAlcohol: this.overuseAlcohol,
            finalOveruseAlcohol2: this.overuseAlcohol2,
            finalPersonalApperance: this.personalAppearance,
            finalPersonalApperance2: this.personalAppearance2,
            finalTraumaticSymptoms: this.traumaticSymptoms,
            finalTraumaticSymptoms2: this.traumaticSymptoms2,
            finalLoneliness: this.loneliness,
            finalLoneliness2: this.loneliness2,
            finalLoneliness3: this.loneliness3
        };
        console.log(this.mentalHealthData);
        this.fifthPageData.emit(this.mentalHealthData);
    }
    constructor() { }

    ngOnInit() {
    }

}
