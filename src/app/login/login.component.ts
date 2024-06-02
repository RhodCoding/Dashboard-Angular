import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  dataService = inject(DataService);
  
  passwordInputType: string = 'password';
  emailInputFocus: boolean = false;
  passwordInputFocus: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
  }

  onFocusEmailInput(): void {
    this.emailInputFocus = true;
  }

  onBlurEmailInput(): void {
    this.emailInputFocus = false;
  }

  onFocusPasswordInput(): void {
    this.passwordInputFocus = true;
  }

  onBlurPasswordInput(): void {
    this.passwordInputFocus = false;
  }

  adduser(): void {
    let body = {
      "domain": "hellohello",
      "password": "hellohello"
    }
    this.dataService.postSend("addstudent", body).subscribe((res: any) => {
      console.log(res)
    },
     er => {
      console.log(er)
     }
  )
  }
}   
