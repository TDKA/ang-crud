import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  message: any;
  public userData =  {
    firstName: "",
    lastName: "",
    email: "",
    city: ""
  }

  emailRegex =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  public myForm: FormGroup = this.formBuilder.group({
    firstName: [``, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
    lastName: [``, [Validators.required, Validators.maxLength(20), Validators.minLength(3)] ],
    email: [``, [Validators.required, Validators.pattern(this.emailRegex)]],
    city: [``, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
   
  }


  add($event: { preventDefault: () => void; }) {
    const {firstName, lastName, email, city} = this.myForm.value;
    this.userService.postUser(firstName ,lastName ,email, city).subscribe((data:any)=>{
      this.message = data.message;
    })
    this.router.navigate(['/clients']);
    $event.preventDefault()
  }


}
