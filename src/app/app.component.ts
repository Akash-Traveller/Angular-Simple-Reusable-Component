import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sending Data From Child to parent component';
  updateData (item:string) {
    console.log(item);
  }
}
