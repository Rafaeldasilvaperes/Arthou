import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { Register } from './register.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register = {
    name: '',
    email: '',
    password: '',
    social_name: ''
  }

  
  /* constructor(private router: Router, private http: HttpClient) { }
  onSubmit(data: any){
    this.http.post('http://localhost:3300', data).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(data);
  } */
  constructor(private registerService: RegisterService, private router: Router) { }
  
  

  ngOnInit(): void {
    
  }

  createRegister(){
    this.registerService.create(this.register).subscribe(() => {
      this.registerService.showMessage('You have successfully signed in!')
      this.router.navigate(['/registered'])
    })
  }

  navigateToRegistered(): void{
    
    
  }

 

}
