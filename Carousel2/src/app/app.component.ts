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

 thumbsSwiper!: Swiper;
  thumbs: any;
  
  setThumbsSwiper(swiper : Swiper) {
    this.thumbsSwiper = swiper;
  }

  log(string : string) {console.log(string);}
}
