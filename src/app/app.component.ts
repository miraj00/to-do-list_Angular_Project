import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from 'todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent {
 
      title = 'To-Do-List';

      filteredIndexes: number[] = [];
 

  // Pre inserted array 
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
            task: 'Do Vaccum',
            completed: false,
          },
    ];

    // creating string that saves value from input  and then its added to addTodo function
    inputModel:string = "";   

     stuffIsCompleted : boolean = false;

   
    // ------------------------  Functions to add, remove, complete and search ---------------------------------------
    // addTodo function
    addTodo(): void {
     
       this.todo.push({
        task : this.inputModel,
        completed : false
    });
    
    }
  
    // removeTodo function will map the index and then splice value using that index :
    removeTodo(todoIn: string): void {
          console.log('removeTodo: ' + todoIn);
          let index = 0;
  
      this.todo.map((todo, i) => {
        if (todo.task === todoIn) {
          index = i;
        }
        return index;
      });
      this.todo.splice(index, 1);
    }
  
    //completeTodo function will give true value to completed tasks and add in tpo array :
    completeTodo(i: number): void {

        this.todo[i].completed=true;
         
    }
  

}  

