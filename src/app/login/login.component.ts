import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;

  constructor(private servAuth : AuthService) {this.login={id:"",mdp:""};}

  ngOnInit(): void {
  }

  connexion(f:NgForm){
    this.servAuth.fctConnexion(f.value);
  }
}
