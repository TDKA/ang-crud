import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  clientId: any;
  client: any;

  editClientForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id');

    if (this.clientId !== '') {
      this.userService.findOne(this.clientId).subscribe((data) => {
        this.client = data.client[0];

        this.editClientForm = this.formBuilder.group({
          firstName: new FormControl(this.client.firstName),
          lastName: new FormControl(this.client.lastName),
          city: new FormControl(this.client.city),
          email: new FormControl(this.client.email),
        });
      });
    }
  }

  onSubmit() {
    const formValue = this.editClientForm.value
    console.log(formValue);

    this.userService.editUser(this.clientId, formValue).subscribe(data => {
      this.client = data
      this.router.navigate(['/clients'])
    })
  }
}
