import { Component, OnInit, ɵisBoundToModule__POST_R3__ } from '@angular/core';
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
        { task: 'take down Halloween decorations', completed: false },
        { task: 'cook dinner', completed: true },
    ];

    filteredToDos: ToDo[] = [];

    filterInput: string = '';
    toDoInput: string = '';

    constructor() { }

    ngOnInit(): void {
        this.filteredToDos = this.toDos;
    }

    addTask(): void {
        if (this.toDoInput !== '') {
            this.toDos.push({ task: this.toDoInput, completed: false });
            this.toDoInput = '';
        }
        this.filterToDos();
    }

    removeTask(task: string): void {
        const index: number = this.toDos.findIndex(element => element.task === task);
        this.toDos.splice(index, 1);
        this.filterToDos();
    }

    completeTask(task: string): void {
        const index: number = this.toDos.findIndex(element => element.task === task);
        this.toDos[index].completed = true;
        this.filterToDos();
    }

    filterToDos(): void {
        this.filteredToDos = this.toDos.filter(toDo => toDo.task.includes(this.filterInput));
    }

}