import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;

  constructor() { }

  ngOnInit(): void {
  }

  soumissionFormulaire(f:NgForm){
    // console.log("Formulaire envoyé");
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value, this.login)
  }
}
