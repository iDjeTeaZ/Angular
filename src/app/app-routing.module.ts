import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { EditionGuard } from './edition.guard';
import { Error404Component } from './error404/error404.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';
import { ListeEtudiantsComponent } from './liste-etudiants/liste-etudiants.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"listeEtudiant",component:ListeEtudiantsComponent},
  {path:"contact",component:ContactComponent},
  {path:"etudiant/:index",component:EtudiantComponent},
  {path:"edit/:index",canActivate:[EditionGuard],component:EditComponent},
  {path:"edit",component:EditComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
