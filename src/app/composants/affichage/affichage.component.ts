import { Component, OnInit } from '@angular/core';
import {MessagerieService} from "../../services/messagerie.service";
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  public messages: Message[];

  public motClef: string;
  constructor(private svc: MessagerieService) {
    this.messages = this.svc.getMessages();

    this.motClef="";
  }

  ngOnInit(): void {
  }
  clicSurRecherche() {
    this.messages = this.svc.rechercher(this.motClef);

  }
}
