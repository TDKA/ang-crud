import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { getLocaleCurrencyCode } from '@angular/common';
@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css'],
})
export class AllClientsComponent implements OnInit {
  clients: any[] = [];
  clickOnDelete = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.userService.getAll().subscribe((data) => {
      console.log(data);

      this.clients = data.allClients;
    });
  }

  deleteClient(id: number) {
    this.userService.deleteOne(id).subscribe((data: any) => {
      console.log(data);
      this.getAll();
    });
  }
}
