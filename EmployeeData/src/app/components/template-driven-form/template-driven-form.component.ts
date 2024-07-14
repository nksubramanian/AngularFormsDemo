import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DataService } from '../../data.service'
import {DataItem} from '../../data.model';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})



export class TemplateDrivenFormComponent {

  responseMessage: string | null = null;

  constructor(private myService: DataService) { }

  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: 0,
    gender: ''
  };


  submitForm(form: any): void {
    console.log(this.myService.name);
    if (form.valid) {
      const dataItem: DataItem = {
        name: this.userDetails.name,
        email: this.userDetails.email,
        address: this.userDetails.address,
        mobile: this.userDetails.mobile,
        age: this.userDetails.age,
        gender: this.userDetails.gender,
      };
      let a:number = this.myService.create(dataItem);
      this.responseMessage = this.userDetails.name;
    }
  }
}
