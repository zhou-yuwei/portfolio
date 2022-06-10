import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../../modeles/Personne";
import {MessagerieService} from "../../services/messagerie.service";

@Component({
  selector: 'app-personne-active',
  templateUrl: './personne-active.component.html',
  styleUrls: ['./personne-active.component.css']
})
export class PersonneActiveComponent implements OnInit {
  public personnes: Personne[];
  constructor(private svc: MessagerieService) {
    this.personnes = this.svc.getPersonnes();
  }

  ngOnInit(): void {
  }

}
