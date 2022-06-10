import { Component, OnInit } from '@angular/core';
import {MessagerieService} from "../../services/messagerie.service";
import {Personne} from "../../modeles/Personne";
import {Message} from "../../modeles/Message";

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})
export class SaisieComponent implements OnInit {
  public message: string[];
  private recherche: string;
  constructor(private svc: MessagerieService) {
    this.message=[];
    this.recherche= "";
  }

  ngOnInit(): void {
  }
  clicSurForm(valuesFormulaire: any): void {
    let nouvellePersonne = new Personne(valuesFormulaire.nom, valuesFormulaire.prenom);
    let nouveauMessage=new Message(nouvellePersonne, valuesFormulaire.msg);
    this.svc.ajouterMessage(nouveauMessage);
    this.svc.ajouterPersonne(nouvellePersonne);
    console.log(nouveauMessage);
  }
}
