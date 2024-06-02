import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private ds: DataService){

  }

  ngOnInit() {
    this.getstudentInfo();
  }

  students: any = []

  getstudentInfo(){
    this.ds.getSend("getstudents").subscribe((res:any) => {
      this.students = res.payload
      console.log(this.students)
    },
  er => console.log(er))
  }

  addstudentInfo(){
    let body = {
      fname: "Marcus Adrianne",
      lname: "Mercado",
      mi: "Barnes",
      dob: "11/19/2001",
      pob: "Manila",
      sex: "Male",
      yrlvl:"first",
      course: "BSCS",
      studentno: "202211395",
      address: "1484 Julo St.",
      contactnumber: "09692054107",
      emaddress: "marcusofficial01@gmail.com",
      jhs: "Maranatha Christian Academy",
      syjhs: "2001",
      citizenship: "ph",
      shs:"CINHS",
      syshs: "2001",
      civilstatus: "single",
      parentguardian:"John Doe",
      pgemail: "johndoe@gmail.com",
      pgnumber: "09692054107"
    }
    this.ds.postSend("addstudents", body).subscribe((res:any)=>{
      console.log(res);
    })

    this.getstudentInfo();
  }
    onSubmit(e: any) {
      e.preventDefault()
      console.log(e.target[0].value);
    }

    


  

}