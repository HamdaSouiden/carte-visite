import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-visite.component.html',
  styleUrl: './card-visite.component.css'
})
export class CardVisiteComponent {

  nom : any = "Sellalouti";
  prenom : any = "Aymen";
  job : any = "Enseignant";
  profileImage : any = "assets/images/rotating_card_profile2.png";
  coverImage : any = "assets/images/rotating_card_thumb2.png";
  quote : any = "tant qu'il y a de la vie il y a de l'espoir";
  description : any = "J'enseigne aux étudiants les technos du Web";
  keywords : any = "HTML CSS JS PHP Symfony Angular";

}
