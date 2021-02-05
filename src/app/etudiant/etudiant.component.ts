import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/model/etudiant';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  public etudiant:any

  constructor(public serviceEtudiant:EtudiantsService,private parametresRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.parametresRoute.params.subscribe(
      parametres => {
        let indexEtu = parametres['index'];
        if(indexEtu && +indexEtu in this.serviceEtudiant.listeEtudiant) {
          this.etudiant = this.serviceEtudiant.listeEtudiant[+indexEtu];
        }
      }
    )

  }

}
