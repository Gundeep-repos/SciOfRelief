import { Component, OnInit, Input } from '@angular/core';
import {
  lifeProblemsRecommendations, academicProblemRecommendations,
  mentalHealthProblemRecommendations
} from '../constants/page-constants';
import { RecomList, LifeProblemsData, AcademicsData, MentalHealthData } from '../project-models';
import * as jspdf from 'jspdf';
import * as $ from 'jquery';

@Component({
  selector: 'app-recommendation-screen',
  templateUrl: './recommendation-screen.component.html',
  styleUrls: ['./recommendation-screen.component.scss']
})
export class RecommendationScreenComponent implements OnInit {
  recommendationList: RecomList[] = [];
  showMore: string;
  hidden: boolean;
  showButton: boolean;

  @Input()
  set lifeProblemsData(event: LifeProblemsData) {
    if (event) {
      this.handleLifeProblemSelections(event);
    }

  }

  @Input()
  set academicsData(event: AcademicsData) {
    if (event) {
      this.handleAcademicDataSelections(event);
    }

  }
  @Input()
  set mentalHealthData(event: MentalHealthData) {
    if (event) {
      this.handleMentalHealthSelections(event);
    }
  }

  createRecommendataionList(recomData: RecomList) {
    if (this.recommendationList.length >= 3) {
      this.showButton = true;
      recomData = { ...recomData, hidden: true };
    }
    this.recommendationList.push(recomData);
  }

  onNavigate() {
    window.open('https://uwindsor.ca1.qualtrics.com/jfe/form/SV_bvgkq9GYPqN65yR', '_blank');
}

  constructor() { }

  ngOnInit() {
    this.hidden = true;
    this.showMore = 'Show More';
  }

  handleLifeProblemSelections(event: LifeProblemsData) {
    let recommendationData: RecomList;
    if (event.finalHouseProblem2 !== '') {
      if (event.finalHouseProblem2 === 'In Residence') {
        recommendationData = {
          description: lifeProblemsRecommendations.RECOMMENDATION_HOUSING_RESIDENCE,
          hidden: false
        };
      } else {
        recommendationData = {
          description: lifeProblemsRecommendations.RECOMMENDATION_HOUSING_OFF_CAMPUS,
          hidden: false
        };
      }
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalLegalIssue !== '') {
      recommendationData = {
        description: lifeProblemsRecommendations.RECOMMENDATION_LEGAL,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalFinancialProblem !== '') {
      recommendationData = {
        description: lifeProblemsRecommendations.RECOMMENDATION_LIFE_PROBLEM_FINANCE,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalInterPersonal2 !== '') {
      switch (event.finalInterPersonal2) {
        case 'On campus':
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_INTERPERSONAL_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_INTERPERSONAL_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_INTERPERSONAL_TELEPHONE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_INTERPERSONAL_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalSexualAbuse2 !== '') {
      if (event.finalSexualAbuse2 === 'Yes') {
        recommendationData = {
          description: lifeProblemsRecommendations.RECOMMENDATION_SEXUAL_ABUSE,
          hidden: false
        };
        this.createRecommendataionList(recommendationData);
      } else if (event.finalSexualAbuse3 !== '') {
        switch (event.finalSexualAbuse3) {
          case 'On campus':
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_SEXUAL_ABUSE_RESIDENCE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Off-Campus':
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_SEXUAL_ABUSE_OFF_CAMPUS,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Over the phone':
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_SEXUAL_ABUSE_TELEPHONE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          default:
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_SEXUAL_ABUSE_WEB,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
        }
      }
    }

    if (event.finalPhysicalAbuse2 !== '') {
      if (event.finalPhysicalAbuse2 === 'Yes') {
        recommendationData = {
          description: lifeProblemsRecommendations.RECOMMENDATION_PHYSICAL_ASSAULT_REPORT,
          hidden: false
        };
        this.createRecommendataionList(recommendationData);
      } else if (event.finalPhysicalAbuse3 !== '') {
        switch (event.finalPhysicalAbuse3) {
          case 'On campus':
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_PHYSICAL_ASSAULT_RESIDENCE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Off-Campus':
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_PHYSICAL_ASSAULT_OFFCAMPUS,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Over the phone':
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_PHYSICAL_ASSAULT_TELEPHONE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          default:
            recommendationData = {
              description: lifeProblemsRecommendations.RECOMMENDATION_PHYSICAL_ASSAULT_WEB,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
        }
      }
    }
    if (event.finalGriefLoss2 !== '') {
      switch (event.finalGriefLoss2) {
        case 'On campus':
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_GRIEF_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_GRIEF_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_GRIEF_TELEPHONE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: lifeProblemsRecommendations.RECOMMENDATION_GRIEF_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalPhysicalHeaalthIssue !== '') {
      recommendationData = {
        description: lifeProblemsRecommendations.RECOMMENDATION_PERSONAL_HEALTH,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }

    if (event.finalDiscriminationProblem !== '') {
      recommendationData = {
        description: lifeProblemsRecommendations.RECOMMENDATION_DISCRIMINATION,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }

    if (event.finalFoddProblem !== '') {
      recommendationData = {
        description: lifeProblemsRecommendations.RECOMMENDATION_FOOD,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }

    if (event.finalTownProbelm !== '') {
      recommendationData = {
        description: lifeProblemsRecommendations.RECOMMENDATION_GETTING_AROUND,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
  }

  handleAcademicDataSelections(event: AcademicsData) {
    let recommendationData: RecomList;
    if (event.finalAnxietyProblem !== '' && event.finalAnxietyProblem !== '0 = not at all') {
      recommendationData = {
        description: academicProblemRecommendations.RECOMMENDATION_ACADEMIC,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalWorkloadProblem !== '' && event.finalWorkloadProblem !== '0 = not at all') {
      recommendationData = {
        description: academicProblemRecommendations.RECOMMENDATION_ACADEMIC_TIME,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalGradesProblem !== '' && event.finalGradesProblem !== '0 = not at all') {
      recommendationData = {
        description: academicProblemRecommendations.RECOMMENDATION_ACADEMIC_GRADES,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalStaffProblem !== '' && event.finalStaffProblem !== '0 = not at all') {
      recommendationData = {
        description: academicProblemRecommendations.RECOMMENDATION_ACADEMIC_PROF,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
    if (event.finalAnxietySchool !== '' && event.finalAnxietySchool !== '0 = not at all') {
      recommendationData = {
        description: academicProblemRecommendations.RECOMMENDATION_ACADEMIC_ANXEITY,
        hidden: false
      };
      this.createRecommendataionList(recommendationData);
    }
  }

  handleMentalHealthSelections(event: MentalHealthData) {
    let recommendationData: RecomList;
    if (event.finalLowMood2 !== '') {
      switch (event.finalLowMood2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_MOOD_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_MOOD_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_MOOD_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_MOOD_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalSelfHarm2 !== '') {
      if (event.finalSelfHarm2 === 'Yes') {
        recommendationData = {
          description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUICIDAL_RISK,
          hidden: false
        };
        this.createRecommendataionList(recommendationData);
      } else if (event.finalSelfHarm3 !== '') {
        switch (event.finalSelfHarm3) {
          case 'On campus':
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUICIDAL_RESIDENCE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Off-Campus':
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUICIDAL_OFFCAMPUS,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Over the phone':
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUICIDAL_TELE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          default:
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUICIDAL_WEB,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
        }
      }
    }

    if (event.finalExcessiveWorry2 !== '') {
      switch (event.finalExcessiveWorry2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANXIETY_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANXIETY_OFFCAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANXIETY_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANXIETY_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalAnger2 !== '') {
      switch (event.finalAnger2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANGER_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANGER_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANGER_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_ANGER_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finaldisorderEating2 !== '') {
      switch (event.finaldisorderEating2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_EATING_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_EATING_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_EATING_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_EATING_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalSleepingDifficulty2 !== '') {
      switch (event.finalSleepingDifficulty2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SLEEPING_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SLEEPING_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SLEEPING_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SLEEPING_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalOveruseAlcohol2 !== '') {
      switch (event.finalOveruseAlcohol2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalOveruseAlcohol2 !== '') {
      switch (event.finalOveruseAlcohol2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_SUBSTANCE_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalPersonalApperance2 !== '') {
      switch (event.finalPersonalApperance2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_BODY_IMAGE_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_BODY_IMAGE_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_BODY_IMAGE_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_BODY_IMAGE_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalTraumaticSymptoms2 !== '') {
      switch (event.finalTraumaticSymptoms2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalTraumaticSymptoms2 !== '') {
      switch (event.finalTraumaticSymptoms2) {
        case 'On campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_RESIDENCE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Off-Campus':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_OFF_CAMPUS,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        case 'Over the phone':
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_TELE,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
        default:
          recommendationData = {
            description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_TARUMA_WEB,
            hidden: false
          };
          this.createRecommendataionList(recommendationData);
          break;
      }
    }

    if (event.finalLoneliness2 !== '') {
      if (event.finalLoneliness2 === 'Yes') {
        recommendationData = {
          description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_LONELINESS,
          hidden: false
        };
        this.createRecommendataionList(recommendationData);
      } else if (event.finalLoneliness3 !== '') {
        switch (event.finalLoneliness3) {
          case 'On campus':
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_LONELINESS_RESIDENCE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Off-Campus':
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_LONELINESS_OFF_CAMPUS,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          case 'Over the phone':
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_LONELINESS_TELE,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
          default:
            recommendationData = {
              description: mentalHealthProblemRecommendations.RECOMMENDATION_MENTAL_HEALTH_LONELINESS_WEB,
              hidden: false
            };
            this.createRecommendataionList(recommendationData);
            break;
        }
      }
    }
  }

  toggle() {
    if (this.hidden) {
      this.executeShowMore();
    }
    if (!this.hidden) {
      this.executeShowLess();
    }
    this.hidden = !this.hidden;
  }

  executeShowMore() {
    this.recommendationList.forEach(recom => {
      recom.hidden = false;
    });
    this.showMore = 'Show Less';
  }

  executeShowLess() {
    this.recommendationList.map((recomData, index) => {
      if (index > 2) {
        recomData.hidden = true;
      }
    });
    this.showMore = 'Show More';
  }

  saveAsPdf() {
    const doc = new jspdf();
    doc.fromHTML($('#recommendations').get(0), 5, 5, { width: 150 });
    doc.save('Recommendations.pdf');
  }

}
