import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['😀','😁','😂','🤣']

  addItem() {
    this.items.push(this.title)
  }

  removeItem(i : number) {
    this.items.splice(i, 1)
  }
}
