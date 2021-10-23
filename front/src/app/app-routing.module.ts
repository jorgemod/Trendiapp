import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PropuestaComponent } from './components/propuesta/propuesta.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'idea', component:PropuestaComponent},
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path:'**', pathMatch:'full', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
