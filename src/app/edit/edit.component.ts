import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  edit:any;
  editBase:any;
  indexEtu:number=-5;
  etudiant: import("c:/Users/idjet/OneDrive/Bureau/Angular/my-app/src/model/etudiant").Etudiant | undefined;

  constructor(public serviceEtudiant:EtudiantsService,private parametresRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.parametresRoute.params.subscribe(
      parametres => {
        let indexEtu = parametres['index'];
        if(indexEtu && +indexEtu in this.serviceEtudiant.listeEtudiant) {
          this.indexEtu=indexEtu;
        }
      }
    )

    this.edit =this.serviceEtudiant.listeEtudiant[this.indexEtu];
    this.editBase=Object.assign({},this.edit)
}
/**
   * Retour des input du formulaire pour afficher dans la console
   */
  suiviInput(){
    console.log(this.edit);
  }
  /**
   * Méthode appelée par le formulaire
   * @param f Les résultats du formulaire
   */
  soumissionFormulaire(f:NgForm){
    // console.log("Formulaire envoyé");
    Object.assign(this.editBase,this.edit)
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value, this.edit)
  }
}
