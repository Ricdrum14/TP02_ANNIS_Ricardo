import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { CompteFormulaireComponent } from './compte-formulaire/compte-formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    TetiereComponent,
    FooterComponent,
    CompteFormulaireComponent,
    RecapitulatifComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

   
  recapData:any=null;// stock les données du client

  submitted=false;

  onSubmit(clientData: any){

    console.log('Formulaire soumis avec les données :', clientData);
    
    this.recapData={...clientData}; // on copie les donnees du client dans recapData
    this.submitted=true;
  }
}

