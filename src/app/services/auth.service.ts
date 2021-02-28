import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/model/compte';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Compte;

  constructor(private http:HttpClient,private router:Router) {this.user= {"name":"anonymous","surname":"anonymous","token":"","statut":0}}

  fctConnexion(connexion:{login:any,password:string}){
    this.http.get<Compte>(`/assets/${connexion.login}@${connexion.password}.json`).subscribe(
      data=>{
        this.user=data;
        this.router.navigate(["/"])
      },
      err=>{
        this.user={"name":"anonymous","surname":"anonymous","token":"","statut":0};
      }
    )
  }

  deconnexion(){
    this.user={"name":"anonymous","surname":"anonymous","token":"","statut":0};
  }

  isConnected(){
    return this.user.statut>0;
  }

  canEdit(){
    return this.user.statut>1;
  }
}
