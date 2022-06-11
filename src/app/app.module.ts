import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import {RouterModule, Routes} from "@angular/router";
import { MoiComponent } from './composants/moi/moi.component';
import {FormsModule} from "@angular/forms";
import {PasswordGuard} from "./password.guard";
import { MessagerieComponent } from './composants/messagerie/messagerie.component';
import { CocktailComponent } from './composants/cocktail/cocktail.component';
import { SeriesComponent } from './composants/series/series.component';
import { SaisonsComponent } from './composants/saisons/saisons.component';
import {HttpClientModule} from "@angular/common/http";
import { EnTeteComponent } from './composants/en-tete/en-tete.component';
import { PersonneActiveComponent } from './composants/personne-active/personne-active.component';
import { SaisieComponent } from './composants/saisie/saisie.component';
import { AffichageComponent } from './composants/affichage/affichage.component';
import { BarreNavComponent } from './composants/barre-nav/barre-nav.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

const appRoutes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'moi', component: MoiComponent, canActivate: [PasswordGuard]},
  {path: 'series', component: SeriesComponent},
  {path: 'serie/:id', component: SaisonsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'messagerie', component: MessagerieComponent},
  {path: 'cocktail', component: CocktailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MoiComponent,
    MessagerieComponent,
    CocktailComponent,
    SeriesComponent,
    SaisonsComponent,
    EnTeteComponent,
    PersonneActiveComponent,
    SaisieComponent,
    AffichageComponent,
    BarreNavComponent,
    PokemonsComponent
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
