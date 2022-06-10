import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Serie} from "../../modeles/Serie";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-saisons',
  templateUrl: './saisons.component.html',
  styleUrls: ['./saisons.component.css']
})
export class SaisonsComponent implements OnInit {

  public serie$: Observable<Serie>;
  public id: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.serie$ = this.http.get<Serie>("http://10.103.0.254:8000/api/series/" + this.id + ".json");
  }

  ngOnInit(): void {
  }

}
