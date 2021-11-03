import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  mySwiper: Swiper | undefined

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
