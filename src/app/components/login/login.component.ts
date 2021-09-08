import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public message = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    this.authService.login(data).subscribe((response) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.message = 'Login successfully';
    }, (error) => {
      console.log(error.message)
    })
  }

}
