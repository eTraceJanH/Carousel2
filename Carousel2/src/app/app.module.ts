// external imports
import { SwiperModule} from 'swiper/angular';

// angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// own app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule 
({declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
