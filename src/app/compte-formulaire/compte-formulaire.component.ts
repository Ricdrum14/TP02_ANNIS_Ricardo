import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compte-formulaire',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './compte-formulaire.component.html',
  styleUrl: './compte-formulaire.component.css'
})

export class CompteFormulaireComponent {


  client ={
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    pays: '',
    civilite: '',
    password: '',
    login: '',
};

  
@Output() formSubmitted = new EventEmitter<any>();
  onSubmit() {
    this.formSubmitted.emit(this.client);
  }

}
