import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-auto-con-opzioni',
  templateUrl: './auto-con-opzioni.component.html',
  styleUrls: ['./auto-con-opzioni.component.css']
})
export class AutoConOpzioniComponent {
  automobiliConOpzioni: any;

  constructor(private http: ConnectionDBService) { }

  ngOnInit(): void {
    this.http.getAutomobiliOpzionali().subscribe(data => {
      this.automobiliConOpzioni = data;
    });
  }
}
