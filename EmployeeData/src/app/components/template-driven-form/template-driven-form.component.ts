import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DataService } from '../../data.service'
@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})



export class TemplateDrivenFormComponent {


  constructor(private myService: DataService) { }

  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };


  submitForm(form: any): void {
    console.log(this.myService.name);
    if (form.valid) {
      this.myService.create(this.userDetails.name);
      console.log('Form data:', this.myService.data.length);
    }
  }
}
