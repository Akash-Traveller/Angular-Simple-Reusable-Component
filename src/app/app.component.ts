import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reusuable-comp';
  userdetails = [
    {
      name: 'Akash',
      country: 'india'
    },
    {
      name: 'demo',
      country: 'canada'
    }
  ]
}
