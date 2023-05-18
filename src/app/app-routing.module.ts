import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutomobiliComponent } from './components/automobili/automobili.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent },
  {path:'Automobili', component: AutomobiliComponent },
  {path: '', redirectTo: 'Home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
