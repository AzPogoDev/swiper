import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeCardLibModule } from 'ng-swipe-card';
import { SwipeComponent } from '@app/pages';

@NgModule({
  declarations: [SwipeComponent],
  imports: [
    CommonModule,
    SwipeCardLibModule
  ]
})
export class SwipeModule { }
