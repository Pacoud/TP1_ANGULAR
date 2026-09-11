import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  @Input() nomEtu: string = ''
  @Input() prenomEtu: string = ''
  @Input() statutEtu: string = ''

  retNomEtu():string {
    return this.nomEtu;
  }

  retPrenomEtu():string {
    return this.prenomEtu;
  }
}
