import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';

import { SwiperComponent } from "swiper/angular";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller]);
import Swiper from 'swiper/bundle';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

  /*swiper : Swiper;**/
  /*readonly swiper = new Swiper('.swiper-container', {
    // ...
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
  });*/

/**
  onSwiper(swiper : Swiper) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
  */
 thumbsSwiper!: Swiper;
 controlledSwiper!: Swiper;

  constructor(private cd: ChangeDetectorRef
    /*, private swiper : Swiper**/
    ) 
  {
    /*this.thumbsSwiper = swiper;
    this.controlledSwiper = swiper;**/
  }

  ngOnInit() {}

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  show: boolean | undefined; 
  thumbs: any;
  /*thumbsSwiper!: Swiper;**/
  setThumbsSwiper(swiper : Swiper) {
    this.thumbsSwiper = swiper;
  }
  /*controlledSwiper!: any;**/
  setControlledSwiper(swiper : Swiper) {
    this.controlledSwiper = swiper;
  }

  

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView: number = 4;
  pagination: any = false;

  slides2 = ["slide 1", "slide 2", "slide 3"];
  replaceSlides() {
    this.slides2 = ["foo", "bar"];
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: "fraction" };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 }
  };

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 600 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  breakPointsToggle: boolean | undefined;
  breakpointChange() 
  {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 }
    };
  }

  log(string : string) {console.log(string);}

  

}
