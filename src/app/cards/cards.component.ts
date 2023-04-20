import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardData = [
    { title: 'Card 1', description: 'This is Card 1', imageUrl: 'https://pomf2.lain.la/f/ss4nk.jpg' },
    { title: 'Card 2', description: 'This is Card 2', imageUrl: 'https://pomf2.lain.la/f/ss4nk.jpg' },
    { title: 'Card 3', description: 'This is Card 3', imageUrl: 'https://pomf2.lain.la/f/ss4nk.jpg' },
    { title: 'Card 4', description: 'This is Card 4', imageUrl: 'https://pomf2.lain.la/f/ss4nk.jpg' },

    // Add more card data objects as needed
  ];
}