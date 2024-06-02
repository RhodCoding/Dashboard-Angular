import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { PrintResumeComponent } from './print-resume/print-resume.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

    PrintResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

    // Add other modules as needed
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    // Convert the Angular component to a custom element
    const printResumeElement = createCustomElement(PrintResumeComponent, { injector });
    customElements.define('print-resume', printResumeElement);
  }

  ngDoBootstrap() {}
}