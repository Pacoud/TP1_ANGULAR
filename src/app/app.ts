import { ChangeDetectorRef,Component, signal } from '@angular/core';
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
  estAuth:boolean= false;
  resumeSeance = "Prise en main d'Angular, première application";

  constructor(private changeDetector: ChangeDetectorRef) {
    setTimeout(() => {
      this.estAuth = true;
      this.changeDetector.markForCheck();

    }, 3000);
  }
    rendTousPres(){
    console.log("test");
  }

  protected readonly title = signal('TP1_ANGULAR');


}
