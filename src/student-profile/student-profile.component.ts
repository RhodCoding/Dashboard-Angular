import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <section class="studentprofile">
  <div #printContent class="container">
    <div class="left-stripe"></div>
    <div class="wave"></div>    
    <div class="wave2"></div>
    <div class="flex-container">
      <div class="Information-right" style="width: 600px;">
        <div class="firstname">{{ studentProfile.fname }}</div>
        <div class="lastname">{{ studentProfile.lname }}</div>
        <div class="studentno">{{ studentProfile.studentno }}</div>
        <div class="course"> {{studentProfile.yrlvl}} - {{studentProfile.course}}</div>
        <div class="schoolx">EDUCATION</div>
        <div class="schoolone">{{studentProfile.jhs}} ({{studentProfile.syjhs}})</div>
        <div class="schooloneinfo">Senior High School</div>
        <div class="schooltwo">{{studentProfile.shs}} ({{studentProfile.syshs}}) </div>
        <div class="schooltwoinfo">Junior High School</div>
        <div class="portfolio">LATEST CERTIFICATES</div>
        <div class="portfolio-one"><img src="assets/asd.jpg" alt=""><img src="assets/asd.jpg" alt=""></div>
        <div class="info">
            <div class="nameone">Example hello hello hello hello awefawefawef asdfasdfasdfasdf asdasd</div>
            <div class="nametwo">Example hello hello hello hello awefawefawef asdfasdfasdfasdf asdasd</div>
        </div>
        <div class="portfolio-two"><img src="assets/asd.jpg" alt=""><img src="assets/asd.jpg" alt=""></div>
        <div class="info">
            <div class="namethree">Example hello hello hello hello awefawefawef asdfasdfasdfasdf asdasd</div>
            <div class="namefour">Example hello hello hello hello awefawefawef asdfasdfasdfasdf asdasd</div>
        </div>
      </div>        
    </div>
    <div class="flex-container2" style="width: 250px;">
      <div class="Information-left">
        <div class="profilepic"><img src="assets/asd.jpg" alt=""></div>
        <div class="contactinfo">PHONE</div>
        <div class="contactno" >{{studentProfile.contactnumber}}</div>
        <div class="emailll">EMAIL ADDRESS</div>
        <div class="email" >{{studentProfile.emaddress}}</div>
        <div class="addressinfo">HOME ADDRESS</div>
        <div class="address">{{studentProfile.address}}</div>
        <div class="skills">SKILLS</div>
        <ul>
            <li>Python</li>
            <li>C++</li>
            <li>Php</li>
            <li>Java</li>
        </ul>
        <div class="emergency">EMERGENCY CONTACT</div>
        <div class="emergency-contact" >{{studentProfile.parentguardian}}</div>
        <div class="emergency-no">{{studentProfile.pgcontact}}</div>
        <div class="coordinator">COORDINATOR</div>
        <div class="coordinator-name" >Sir. Kenneth Bautista</div>
        <div class="coordinator-no">09696969696</div>
      </div>
    </div>
  </div>
  </p>
  `,
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {
   @Input() studentProfle: StudentProfile;
}
