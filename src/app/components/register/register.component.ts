import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public alertClassName = 'alert-success'
  public hasError = false;  
  public cities = ['Delhi', 'Mumbai', 'Goa', 'Pune']
  public userModel = new User();
  public message = '';

  constructor(private authService:AuthService) { 
    console.log('Before: ',this.userModel)
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.authService.register(this.userModel).subscribe((response) => {
      this.message = response.message;
      this.alertClassName = 'alert-success'
    }, (error) => {
      this.alertClassName = 'alert-danger'
      this.message = "Registration failed"
    })
  }

  onChange(city: any){
    if(city==='default'){
      this.hasError = true
    }else{
      this.hasError = false
    }
  }

}
