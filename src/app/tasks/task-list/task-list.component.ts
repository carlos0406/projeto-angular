import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import {take } from 'rxjs/operators';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tarefas?: Task[];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTarefas();
  }
  deleteTarefa(id: number) {
    this.taskService.delete(id).pipe(take(1)).subscribe(
      response=> {
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );

  }
  getTarefas() {
    this.taskService.getTasks("", false, 50, "").subscribe(data => {
      this.tarefas = data;


    });




  }
}
