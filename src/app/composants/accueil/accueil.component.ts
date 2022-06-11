import { Component, OnInit } from '@angular/core';
import {GuardService} from "../../services/guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public password: string;

  constructor(private svc: GuardService, private router: Router) {
    this.password = "";
  }

  ngOnInit(): void {
  }

  public clicGuard() {
    this.svc.password = this.password;
    //console.log(this.password);

    this.router.navigate(['moi']);

  }
}
