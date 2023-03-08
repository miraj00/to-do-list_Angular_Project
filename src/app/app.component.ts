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

      todoList: Todo[] = [];

      completedTodos: Todo[] = [];

      filteredIndexes: number[] = [];
      filteredList: Todo[] = [];

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
    // style="text-decoration: line-through"

    // html --->  *ngIf="this.isButtonVisible" (click)="this.isButtonVisible = false"
    // isButtonVisible : boolean = true;
   

   
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
    completeTodo(todo: string, i: number): void {

       
      
          let tempTodo = {
            task: todo,
            completed: true,
          };
          // this adds completed task in to new array and saves it  
          this.completedTodos = [...this.completedTodos, tempTodo];
          // console log to check out put  
          console.log(this.completedTodos);

         
    }
  
    // searchList function :
    searchList(search: string) {
          this.filteredIndexes = [];
  
      if (search === '') {
        console.log('search empty');
      } else {
        this.todoList.forEach((todo, i) => {
          !todo.task.toLowerCase().includes(search.toLowerCase()) &&
            this.filteredIndexes.push(i);
        });
        // console.log(this.filteredIndexes);
      }


    }


}  

function stuffCompleted() {
  
  
}

