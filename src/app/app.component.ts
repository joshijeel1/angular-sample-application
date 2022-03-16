import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample-application';

  isUserLoggedIn = false;

   constructor() {}

   ngOnInit() {
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData---" + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;
   }

}
