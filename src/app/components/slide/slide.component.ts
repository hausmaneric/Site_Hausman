import { Component, ViewChild, viewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  images = [
    { src: 'assets/next_frame_carousel_1.png' },
    { src: 'assets/next_frame_carousel_2.png' },
    { src: 'assets/next_frame_carousel_3.png' },
    { src: 'assets/next_frame_carousel_4.png' },
    { src: 'assets/next_frame_carousel_5.png' }
  ];

}
