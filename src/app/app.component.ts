import { Component } from '@angular/core';
import { Todo } from 'todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';


       todo :Todo [] = [
          {
            task: 'Do Dishes',
            completed: false,
          },
          {
            task: 'Start Laundry',
            completed: false,
          },
          {
            task: ' Floor Cleaning',
            completed: false,
          },
          {
            task: 'Do Vacuum',
            completed: false,
          },
        ];

      }
