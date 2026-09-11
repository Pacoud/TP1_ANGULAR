import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from './etudiant/etudiant';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nom_TP = "TP1";
  resumeSeance = "Prise en main d'Angular, première application";
  protected readonly title = signal('TP1_ANGULAR');

}
