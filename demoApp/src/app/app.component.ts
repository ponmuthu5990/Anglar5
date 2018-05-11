import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayName = true;
public color = 'blue';
  public colors = ['red', 'pink', 'black', 'orange', 'blue']
}
