import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = true;

  constructor(public authService: AuthService) { 
    this.isLogged = authService.loggedIn()
  }

  ngOnInit(): void {
  }

}
