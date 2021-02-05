import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from 'src/model/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  public listeEtudiant:Array<Etudiant>=[];

  constructor(private http:HttpClient) {
    this.http.get<Array<Etudiant>>("/assets/etudiants.json").subscribe(data=>{this.listeEtudiant=data;console.log(data)});
  }
}
