import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-2-start';
  username: String =""
  constructor(){
  }

  resetUsername(){
    if(this.username.length !==0){
      this.username="";
    }
  }


}
