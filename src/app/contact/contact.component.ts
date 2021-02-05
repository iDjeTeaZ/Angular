import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any;
  email:string = "truc";

  constructor() { }

  ngOnInit(): void {
    /**
     * Initialisation de l'objet contact
     */
    this.contact = {
      nom:'',
      email:'',
      sujet:'',
      message:''
    }
  }
  /**
   * Retour des input du formulaire pour afficher dans la console
   */
  suiviInput(){
    console.log(this.contact);
  }
  /**
   * Méthode appelée par le formulaire
   * @param f Les résultats du formulaire
   */
  soumissionFormulaire(f:NgForm){
    // console.log("Formulaire envoyé");
    console.log("Données envoyées", f);
    console.log("Comparaison des données", f.value, this.contact)
  }

}
