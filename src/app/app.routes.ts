import { Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FrontComponent } from './front/front.component';
import { PrintResumeComponent } from './print-resume/print-resume.component'; // Adjust the path as per your project structure

export const routes: Routes = [
  { path: 'app-front', component: FrontComponent },
  { path: 'app-edit-profile', component: EditProfileComponent },
  { path: 'app-print-resume', component: PrintResumeComponent }, // Route for PrintResumeComponent
  // { path: '**', component: PageNotFoundComponent },  // Optional: Wildcard route for a 404 page
];