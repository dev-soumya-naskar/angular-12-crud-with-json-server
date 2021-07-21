import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegistrationStudentComponent } from './components/registration-student/registration-student.component';

const routes: Routes=[
  {
    path: 'add',
    component: AddStudentComponent
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent
  },
  {
    path: 'list',
    component: ListStudentComponent
  },
  {
    path: 'login',
    component: LoginStudentComponent
  },
  {
    path: 'register',
    component: RegistrationStudentComponent
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
