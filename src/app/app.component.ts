import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PrintResumeComponent } from './print-resume/print-resume.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrintResumeModule } from './print-resume/print-resume.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, EditProfileComponent, LoginComponent, PrintResumeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  constructor(private router: Router) {}
  openResume() {
    const url = this.router.createUrlTree(['/print-resume']).toString();
    const newWindow = window.open(url, '_blank');
  }
  @ViewChild(PrintResumeComponent, { static: false })
  printResumeComponent!: PrintResumeComponent;

  printResume() {
    if (this.printResumeComponent) {
      this.printResumeComponent.printResume();
    } else {
      console.error('Print Resume component instance not found.');
    }
  }
}
