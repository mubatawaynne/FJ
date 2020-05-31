import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule  } from '@ngx-share/buttons';
import { ShareButtonsConfig, IShareButtons } from '@ngx-share/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RequestqoteComponent } from './requestqote/requestqote.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
const customConfig: ShareButtonsConfig = {
  include: ['whatsapp', 'twitter', 'email'],
  exclude: [],
  theme: 'circles-dark',
  gaTracking: true,
  autoSetMeta: true,
  twitterAccount: 'username',
  prop: {
    facebook: {
      icon: ['fab', 'facebook-square']
    },
    twitter: {
      icon: ['fab', 'twitter-square'],
      text: 'Tweet'
    },
    // and so on...
  }
}


@NgModule ({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RequestqoteComponent,
    BlogComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    JwSocialButtonsModule,
    AppRoutingModule,
    ShareButtonsModule,
    FormsModule,
    HttpClientModule,       // (Required) For share counts
    HttpClientJsonpModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiZGF2ZWNocG4iLCJhIjoiY2p2eGFpZmVkMDJ1eDRibXFpZm4wOGwyaSJ9._D3tQLNgKIijUKRuABfqcw', // Optionnal, can also be set per map (accessToken input of mgl-map)
     
    }),
    
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
