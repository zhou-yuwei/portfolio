import {Injectable} from '@angular/core';
import {Message} from "../modeles/Message";
import {Personne} from "../modeles/Personne";

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
  private messages: Message[];
  private personnes: Personne[];
  constructor() {
    this.messages = [];
    this.personnes = [];
  }

  public ajouterMessage(nouveauMessage: Message): void{

    if((nouveauMessage.auteur.nom =="")&&(nouveauMessage.auteur.prenom ==""))
      nouveauMessage.auteur.nom = "Pseudo";
    this.messages.push(nouveauMessage);
  }

  public rechercher(motClef: string): Message[]{
    let surmessages: Message[];
    surmessages=[];
    for (let msg of this.messages) {
      if(msg.message.search(motClef)!==-1)
        surmessages.push(msg);
    }
    return surmessages;
  }

  public getMessages(): Message[] {
    return this.messages;
  }
/*
  public getPersonnes(): Personne[] {
    let auteurs: Personne[];
    auteurs = [];
    for (let msg of this.messages) {
      auteurs.push(msg.auteur);
    }
    return auteurs;
  }
*/

  public ajouterPersonne(nouvellePersonne: Personne): void {
    //if(!this.personnes.includes(nouvellePersonne)) ca passe toujours parce que
    //includes() method compares objects by reference and not by value.
    //case-sensitive
    if(!this.personnes.some(x => x.nom === nouvellePersonne.nom && x.prenom === nouvellePersonne.prenom))
      this.personnes.push(nouvellePersonne);
  }
  public getPersonnes(): Personne[] {
    return this.personnes;
  }
}

