import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDos: ToDo[] = [
    { task: 'rake and bag leaves', completed: false },
    { task: 'clean bedroom', completed: true },
    { task: 'do laundry', completed: true },
    { task: 'finish Angular project', completed: false },
    { task: 'put up Halloween decorations', completed: false },
    { task: 'cook dinner', completed: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
