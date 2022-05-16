import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  startQuiz() {
    if (this.nameKey.nativeElement.value) {
      this.router.navigate(['/questions']);
      localStorage.setItem('name', this.nameKey.nativeElement.value);
    } else {
      alert('Please enter name');
    }
  }
}
