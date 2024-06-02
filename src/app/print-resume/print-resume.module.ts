import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintResumeComponent } from './print-resume.component';

@NgModule({
  declarations: [
    PrintResumeComponent
  ],
  imports: [
    CommonModule
    // Add any additional modules needed by PrintResumeComponent
  ],
  exports: [
    PrintResumeComponent
  ]
})
export class PrintResumeModule { }