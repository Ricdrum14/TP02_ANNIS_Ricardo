import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.css'
})

export class RecapitulatifComponent {
  @Input() client:any;
}
