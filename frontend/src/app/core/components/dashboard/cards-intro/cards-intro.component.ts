import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cards-intro',
  templateUrl: './cards-intro.component.html',
  styleUrls: ['./cards-intro.component.css']
})
export class CardsIntroComponent {

  @Input() image = ""
}

