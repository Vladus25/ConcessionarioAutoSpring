import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AutomobiliComponent } from './components/automobili/automobili.component';
import { AutoUsataComponent } from './components/auto-usata/auto-usata.component';
import { AutoDaRiparareComponent } from './components/auto-da-riparare/auto-da-riparare.component';
import { AutoConOpzioniComponent } from './components/auto-con-opzioni/auto-con-opzioni.component';
import { RegistraRiparazioneComponent } from './components/registra-riparazione/registra-riparazione.component';
import { ImmatricolaAutoComponent } from './components/immatricola-auto/immatricola-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AutomobiliComponent,
    AutoUsataComponent,
    AutoDaRiparareComponent,
    AutoConOpzioniComponent,
    RegistraRiparazioneComponent,
    ImmatricolaAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
