import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//Creation de routes 
const routes: Routes = [
  // on dit a angular quand tu arrive tu vas sur ma page home obligation de mettre pathMatch 
  {path: '' , redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: PageAccueilComponent},
  {path: 'details', component: PageDetailsComponent},
  {path: '**',  component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
