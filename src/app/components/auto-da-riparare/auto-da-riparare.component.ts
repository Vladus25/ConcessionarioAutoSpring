import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-auto-da-riparare',
  templateUrl: './auto-da-riparare.component.html',
  styleUrls: ['./auto-da-riparare.component.css']
})
export class AutoDaRiparareComponent {

  automobiliDaRiparare: any;

  constructor(private http: ConnectionDBService) { }

  ngOnInit(): void {
    this.http.getRiparazioniAutomobiliUsate().subscribe(data => {
      this.automobiliDaRiparare = data;
    });
  }

}
