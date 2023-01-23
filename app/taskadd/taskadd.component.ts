import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { TaskService } from '../serivces/task.service';
@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent {

  @Output()notify:EventEmitter<boolean>=new EventEmitter<boolean>()

  constructor(private service:TaskService){}
taskform= new FormGroup({
  "task_name": new FormControl("", [Validators.required])
})
get task_name() {
  return this.taskform.get("task_name")
}
createtask() {
  let data = this.taskform.value
  this.service.addTask(data)
  .then((res: any) => res.json())
  .then(data => console.log("task created"))
  .catch(err => alert(err))
  this.notify.emit(true)
}
}
