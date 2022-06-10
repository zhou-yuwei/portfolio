import { Component, OnInit } from '@angular/core';
import {PasswordGuard} from "../../password.guard";
import {GuardService} from "../../services/guard.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public password: string;

  constructor(private svc: GuardService) {
    this.password = "";
  }

  ngOnInit(): void {
  }

  public clicGuard() {
    this.svc.password = this.password;
    console.log(this.password);
  }
}
