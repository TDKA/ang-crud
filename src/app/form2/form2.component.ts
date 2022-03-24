import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  public message: string = '';

  inscriptionForm: any = {
    firstName: null,
    lastName: null,
    email: null,
    city: null,
  };
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      city: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const { firstName, lastName, email, city } = this.inscriptionForm;
    console.log(this.inscriptionForm);
    this.userService.postUser(firstName, lastName, email, city).subscribe({
      next: (data) => {
        console.log('dataToPost', data);
        this.message = data.message;
        console.log(data);
      },
      error: (err) => {
        this.message = err.error.error;
      },
    });
  }
}
