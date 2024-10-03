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
  onSubmit(clientForm: any) {

    // Suppression des espaces autour de chaque champ
    this.client.nom = this.client.nom.trim();
    this.client.prenom = this.client.prenom.trim();
    this.client.email = this.client.email.trim();
    this.client.telephone = this.client.telephone.trim();
    this.client.adresse = this.client.adresse.trim();
    this.client.ville = this.client.ville.trim();
    this.client.codePostal = this.client.codePostal.trim();
    this.client.pays = this.client.pays.trim();
    this.client.civilite = this.client.civilite.trim();
    this.client.password = this.client.password.trim();
    this.client.login = this.client.login.trim();

    // verification
    console.log("Nom valid:", this.client.nom);
    console.log("Prenom valid:", this.client.prenom);
    console.log("Code postal valid:", this.client.codePostal);
    console.log("Form invalid?", clientForm.invalid);

    this.formSubmitted.emit(this.client);

    clientForm.resetForm(); //Réinitialise tout le formulaire
  }

}
