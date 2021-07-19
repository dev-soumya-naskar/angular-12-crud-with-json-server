import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from '../../students.service';

@Component( {
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
} )
export class AddStudentComponent implements OnInit {

  constructor( private student: StudentsService ) { }
  addStudent=new FormGroup( {
    name: new FormControl( '' ),
    email: new FormControl( '' ),
  } );
  ngOnInit(): void {
  }
  SaveData() {
    //console.log( this.addStudent.value );
    this.student.saveStudentData( this.addStudent.value ).subscribe( ( result ) => {
      console.log( result );
    } );
  }


}
