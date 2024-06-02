import { Injectable } from '@angular/core';
import { StudentProfile } from './student-profile';
import { StudentProfileComponent } from './student-profile/student-profile.component';


@Injectable({
  providedIn: 'root'
})
export class EditService {
  protected studentProfile: StudentProfile [] = [
    {
      "id": 0,
    "fname": "Marcus Adrianne",
    "lname": "Mercado",
    "mi": "Barnes",
    "dob": "19-11-2001",
    "pob": "Manila",
    "sex": "male",
    "yrlvl": "second",
    "course": "BSCS",
    "studentno": "202211395",
    "address": "1484 Julo Street",
    "contactnumber": +6392054107,
    "emadress": "marcusofficial01@gmail.com", 
    "jhs": "Maranatha",
    "syjhs": +6392054107,
    "citizenship": "ph",
    "shs": "Gordon College",
    "syshs": +6392054107,
    "civilstatus": "single",
    "parentguardian": "John Doe",
    "pgemail": "johndoe@gmail.com",
    "pgnumber": +6392054107,
    "skill": "skill1",
    },
  ]
  constructor() { }
   
  getStudentProfile() : StudentProfile[] {

  }
}
