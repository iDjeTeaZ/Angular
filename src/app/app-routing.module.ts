import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { Error404Component } from './error404/error404.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"listeEtudiant",component:ListeEtudiantsComponent},
  {path:"contact",component:ContactComponent},
  {path:"etudiant/:index",component:EtudiantComponent},
  {path:"edit",component:EditComponent},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
