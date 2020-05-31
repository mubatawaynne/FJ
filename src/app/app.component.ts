import { Component } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';





@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FJ auto Parts';
  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;

  message;

  email;

  phone;

  data =  {"sender":{"name":"Waynne Mubata","email":"mubatawaynne@yahoo.com"},
  "to":[{"email":"chipundodavid@gmail.com","name":"david"}],
  "textContent":"this is my the message from angular","subject":"enquiry"}

  // Base url
  baseurl = 'https://api.sendinblue.com/v3/smtp/email';

  api_key  = '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'
 
  constructor(private http: HttpClient) { }


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.api_key
    })
  }

  // POST
  sendMail() {
   this.data.textContent = `client has sent you the message below from your website
    ${this.message} 

    phone ${this.phone}
    email ${this.email}
    
    `
   this.http.post(this.baseurl, JSON.stringify(this.data), this.httpOptions)
   .subscribe(x=>{
     console.log(x)
   })

   this.email = '';
   this.phone = '';
   this.message = '';
   
  }  

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction:false,
    },
    fadeEffect: {
      crossFade: true
    },
  }; 
}
