import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  nomEtu: string = "Bon"
  prenomEtu: string = "Prénom"
  statutEtu: string = "absent"

  retNomEtu():string {
    return this.nomEtu;
  }

  retPrenomEtu():string {
    return this.prenomEtu;
  }
}
