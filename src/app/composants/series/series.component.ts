import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Serie} from "../../modeles/Serie";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series$: Observable<Serie[]>;

  constructor(private http: HttpClient) {
    this.series$ = this.http.get<Serie[]>("http://10.103.0.254:8000/api/series.json");
  }

  ngOnInit(): void {
  }

}
