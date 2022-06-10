import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit {
  public titre: string;
  public yuwei: string;
  public julien: string;
  constructor() {
    this.titre = "MESSAGERIE";
    this.yuwei = "https://fr.linkedin.com/in/zhouyuwei"
    this.julien="http://caliendo.fr";
  }

  ngOnInit(): void {
  }
  clicSurBouton(): void {
    console.log("click");
    this.titre = "On se contacte ?";
  }
}
