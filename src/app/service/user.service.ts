import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  // headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  postUser(firstName: string, lastName: string, email: string, city: string): Observable<any> {

    return this.http.post<any>('http://localhost:4000/postUser', {
      firstName,
      lastName,
      email,  
      city
    }, httpOptions)
  }

  getAll():  Observable<any> {
    const clients = this.http.get<any>('http://localhost:4000/users', httpOptions)
    return clients
  }

  deleteOne(id:number): Observable<any> {
    return this.http.delete<any>(`http://localhost:4000/user/${id}`, httpOptions)
  }

  findOne(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:4000/user/${id}`, httpOptions);
  }
  editUser(id: number, userObj: Object): Observable<any> {
    return this.http.put<any>("http://localhost:4000/user/" + id, userObj);
  }
}
