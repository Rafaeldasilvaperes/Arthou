import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL = 'http://localhost:3300/register'

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void{
    console.log(msg)
    //could've used snackbars
  }

  create(register: Register): Observable<Register>{
    return this.http.post<Register>(this.baseURL, register)
  }

}
