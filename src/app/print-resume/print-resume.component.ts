import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-print-resume',
  templateUrl: './print-resume.component.html',
  styleUrls: ['./print-resume.component.css']
})
export class PrintResumeComponent {
  @ViewChild('printContent', { static: false }) printContent!: ElementRef;

  printResume() {
    const printContent = document.querySelector('.container')?.innerHTML;
    if (printContent) {
    
      
      window.print();
      
    } else {
      console.error('Failed to get content for printing.');
    }
  }
}