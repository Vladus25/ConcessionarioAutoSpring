import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-auto-usata',
  templateUrl: './auto-usata.component.html',
  styleUrls: ['./auto-usata.component.css']
})
export class AutoUsataComponent {
  prezzoMassimo!: number;
  automobiliUsate: any;

  constructor(private http: ConnectionDBService) { }

  cercaAutomobiliUsate(): void {
    this.http.getAutomobiliUsateByPrezzo(this.prezzoMassimo).subscribe((response) => {
          this.automobiliUsate = response;
        },
      );
  }
}
