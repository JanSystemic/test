import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../question.model';
import { QuestionareService } from './questionare.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent implements OnInit {
  questions$: Observable<Question[]>;

  constructor(private questionareService: QuestionareService, private el: ElementRef) {}

  ngOnInit() {
    this.questions$ = this.questionareService.getQuestions();
    this.el.nativeElement.addEventListener('scroll', ($event) => {
      this.onWindowScroll();
    });
  }

  onWindowScroll() {
    let questions = this.el.nativeElement.querySelectorAll('.page_wrapper');
    questions.forEach((question) => {
      var etop = question.getBoundingClientRect().top;
      var diff = etop - window.pageYOffset;
      if (diff < 300) {
        this.reinitState(question, questions);
      }
    });
  }

  reinitState(question, questions) {
    questions.forEach(elem => {
      elem.classList.remove('focus');
    });
    question.classList.add('focus');
  }

  gotoNext(event) {
    let node = event.destination ? document.getElementById(event.destination) : document.getElementById(event.question.identifier);
    this.el.nativeElement.scrollTo({
      left: 0, 
      top: event.destination ? node.offsetTop : node.offsetTop + 500
    });
  
    if (node && event.destination) {
      let inputElement = node.querySelector('input');
      if (inputElement) {
        inputElement.focus();
      }
    } else if (node) {
      let nextInputElement = node.nextElementSibling.querySelector('input');
      if (nextInputElement) {
        nextInputElement.focus();
      }
    }
  }
  

  handleConfirm(selectedOptions: any) {
    console.log('Confirmed Options from MultiOptionComponent:', selectedOptions);
    // Implement logic to handle confirmed options
  }
}
