import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AutomobiliComponent } from './components/automobili/automobili.component';
import { AutoUsataComponent } from './components/auto-usata/auto-usata.component';
import { AutoDaRiparareComponent } from './components/auto-da-riparare/auto-da-riparare.component';
import { AutoConOpzioniComponent } from './components/auto-con-opzioni/auto-con-opzioni.component';
import { RegistraRiparazioneComponent } from './components/registra-riparazione/registra-riparazione.component';
import { ImmatricolaAutoComponent } from './components/immatricola-auto/immatricola-auto.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent },
  {path:'Automobili', component: AutomobiliComponent },
  {path:'ricerca-auto-usata', component: AutoUsataComponent},
  {path:'auto-da-riparare', component: AutoDaRiparareComponent},
  {path:'auto-con-opzioni', component: AutoConOpzioniComponent},
  {path:'registra-riparazione', component: RegistraRiparazioneComponent},
  {path:'immatricola-auto', component: ImmatricolaAutoComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
