/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { SwipeCardLibModule } from 'ng-swipe-card';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent {
  currentIndex: number;
  results = [];
  avatars = [
    {
      name: 'Donald Trump',
      age: 73,
      image:
        'https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/trump-convention-nra.jpg',
      visible: true,
    },
    {
      name: 'Barack Obama',
      age: 58,
      image: 'https://www.babelio.com/users/AVT_Barack-Obama_1405.jpg',
      visible: true,
    },
    {
      name: 'Elon Musk',
      age: 48,
      image:
        'https://www.challenges.fr/assets/img/2022/05/05/cover-r4x3w1000-6273f0a9eceae-063-1395371343.jpg',
      visible: true,
    },
    {
      name: 'Jeff Bezos',
      age: 56,
      // eslint-disable-next-line max-len
      image:
        'https://www.leparisien.fr/resizer/tGNs1ButhLQOa4LtWnWPscgSfEk=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/VF55OPANEBX7HPLJFHJVOADLIQ.jpg',
      visible: true,
    },
    {
      name: 'Beyonce',
      age: 38,
      image:
        'https://www.billboard.com/wp-content/uploads/2022/06/Beyonce-cr-Courtesy-of-Parkwood-Entertainment-press-2022-billboard-1548.jpg?w=910&h=511&crop=1',
      visible: true,
    },
    {
      name: 'Eminem',
      age: 47,
      image:
        'https://cdn.radiofrance.fr/s3/cruiser-production/2020/03/c3cff4c5-1538-4eb6-a9e7-be71cb2983da/1200x630_eminem063_1203074290.jpg',
      visible: true,
    },
  ];
  constructor() {
    this.currentIndex = this.avatars.length - 1;
    console.log(this.currentIndex);
  }

  swiped(event: any, index: number) {
    console.log(this.avatars[index].name + ' swiped ' + event);
    this.avatars[index].visible = false;
    this.results.push(this.avatars[index].name + ' swiped ' + event);
    this.currentIndex--;
  }


  swipeleft() {
    this.avatars[this.currentIndex].visible = false;
    this.results.push(this.avatars[this.currentIndex].name + ' swiped false');
    this.currentIndex--;
  }

  swiperight() {
    this.avatars[this.currentIndex].visible = false;
    this.results.push(this.avatars[this.currentIndex].name + ' swiped true');
    this.currentIndex--;
  }
}
