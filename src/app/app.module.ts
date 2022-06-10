import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import {RouterModule, Routes} from "@angular/router";
import { MoiComponent } from './composants/moi/moi.component';
import {FormsModule} from "@angular/forms";
import {PasswordGuard} from "./password.guard";
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import { MessagerieComponent } from './composants/messagerie/messagerie.component';
import { FilmsComponent } from './composants/films/films.component';
import { CocktailComponent } from './composants/cocktail/cocktail.component';
import { SeriesComponent } from './composants/series/series.component';
import { SaisonsComponent } from './composants/saisons/saisons.component';
import {HttpClientModule} from "@angular/common/http";
import { EnTeteComponent } from './composants/en-tete/en-tete.component';
import { PersonneActiveComponent } from './composants/personne-active/personne-active.component';
import { SaisieComponent } from './composants/saisie/saisie.component';
import { AffichageComponent } from './composants/affichage/affichage.component';

const appRoutes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'moi', component: MoiComponent, canActivate: [PasswordGuard]},
  {path: 'series', component: SeriesComponent},
  {path: 'serie/:id', component: SaisonsComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'messagerie', component: MessagerieComponent},
  {path: 'cocktail', component: CocktailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MoiComponent,
    PokemonComponent,
    MessagerieComponent,
    FilmsComponent,
    CocktailComponent,
    SeriesComponent,
    SaisonsComponent,
    EnTeteComponent,
    PersonneActiveComponent,
    SaisieComponent,
    AffichageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
