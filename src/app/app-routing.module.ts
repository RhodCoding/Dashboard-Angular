import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PrintResumeComponent } from './print-resume/print-resume.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: 'app-front', component: FrontComponent },
  { path: 'app-dashboard', component: DashboardComponent },
  { path: 'app-edit-profile', component: EditProfileComponent },
  { path: 'app-print-resume', component: PrintResumeComponent },
  // { path: '**', component: PageNotFoundComponent },  // Optional: Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule // Ensure CommonModule is imported here
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }