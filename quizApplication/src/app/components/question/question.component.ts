import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;

  public correctAnswer: number = 0;
  public inCorrectAnswer: number = 0;
  public progress: any = '0';

  public counter: number = 60;
  public isQuizComplete: boolean = false;

  intervel$: any;

  constructor(private questionServie: QuestionService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionServie.getQuestionJson().subscribe((data) => {
      this.questionList = data.questions;
      console.log(this.questionList);
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  answer(qno: number, option: any) {
    if (this.currentQuestion === this.questionList.length - 1) {
      this.isQuizComplete = true;
      this.startCounter();
    }

    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
    } else {
      this.inCorrectAnswer++;
    }

    setTimeout(() => {
      this.currentQuestion++;
      this.resetCounter();
    }, 1000);

    this.getProgressPrecentage();
  }

  startCounter() {
    this.intervel$ = interval(1000).subscribe((value: number) => {
      this.counter--;

      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });

    setTimeout(() => {
      this.intervel$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.intervel$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.progress = 0;
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.correctAnswer = 0;
    this.inCorrectAnswer = 0;
    this.currentQuestion = 0;
  }

  getProgressPrecentage() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }
}
