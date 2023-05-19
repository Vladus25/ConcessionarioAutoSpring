import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionDBService } from 'src/app/services/connection-db.service';



@Component({
  selector: 'app-registra-riparazione',
  templateUrl: './registra-riparazione.component.html',
  styleUrls: ['./registra-riparazione.component.css']
})
export class RegistraRiparazioneComponent {
  automobiliUsate: any;
  selectedAutomobile: any;
  riparazione: {
    livGravita: number,
    spesa: number,
    tipo: string
  } = {
    livGravita: 0,
    spesa: 0,
    tipo: ''
  };
  success: string = "";
  error: string = "";

  constructor(private http: ConnectionDBService, private router: Router) { }

  ngOnInit(): void {
    this.http.getRiparazioniAutomobiliUsate().subscribe(data => {
      this.automobiliUsate = data;
    })
  }

  registraRiparazione(): void {
    if (!this.selectedAutomobile || !this.riparazione.livGravita || !this.riparazione.spesa || !this.riparazione.tipo) {
      this.error = 'Si prega di compilare tutti i campi.';
      this.success = "";
      return;
    }

    this.http.postRegistraRiparazioneAuto(this.selectedAutomobile.id, this.riparazione).subscribe(
      (response: HttpResponse<any>) => {
        this.success = 'Riparazione registrata con successo.';
        this.resetForm();
      },
      (error) => {
        this.error = 'Si è verificato un errore durante la registrazione della riparazione.';
        this.success = "";
      }
    );

  }

  resetForm(): void {
    this.selectedAutomobile = null;
    this.riparazione = {
      livGravita: 0,
      spesa: 0,
      tipo: ''
    };
  }
}
