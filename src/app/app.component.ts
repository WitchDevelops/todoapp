//import Angular
import { Component } from '@angular/core';
import { Item } from "./item";

//specifies metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TASK LIST';

  filter: 'all' | 'active' | 'done' = 'all';

  //define an array with all the tasks
  allItems = [
    { description: 'eat', done: false },
    { description: 'drink coffee', done: false },
    { description: 'learn Angular', done: true },
    { description: 'play with cats', done: false },
  ];

  //getter method with a filter to view the tasks
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  };

  //adding items method to add more tasks to the list, unshift so they show as the first position on the list, undone as default
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  };

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  };

}