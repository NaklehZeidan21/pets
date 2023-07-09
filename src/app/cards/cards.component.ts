import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardData = [
    { title: 'Card 1', description: 'This is Card 1', imageUrl: 'https://pomf2.lain.la/f/nvh2ylr8.jpg' },
    { title: 'Card 2', description: 'This is Card 2', imageUrl: 'https://pomf2.lain.la/f/cluvx6lu.png' },
    { title: 'Card 3', description: 'This is Card 3', imageUrl: 'https://pomf2.lain.la/f/nvh2ylr8.jpg' },
    { title: 'Card 4', description: 'This is Card 4', imageUrl: 'https://pomf2.lain.la/f/cluvx6lu.png' },

    //cute doggy https://pomf2.lain.la/f/ss4nk.jpg pink bg
  ];
}
