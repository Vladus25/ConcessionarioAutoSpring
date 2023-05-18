import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-automobili',
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css']
})
export class AutomobiliComponent {
  automobili: any;

  constructor(private http: ConnectionDBService) { }

  ngOnInit(): void {
    this.http.getAllAutomobili().subscribe(data => {
      this.automobili = data;
    });
  }
}
