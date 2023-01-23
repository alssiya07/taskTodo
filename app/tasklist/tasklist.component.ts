import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { TaskService } from '../serivces/task.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
constructor(private service:TaskService){}
@Input()inpt:boolean=false
allTask:any

  ngOnInit():void{
    this.service.listTask().then((res: any) => res.json()).then(data => this.allTask(data)).catch(err => alert("cannot list"))
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.inpt);
  //   console.log("invoke",this.inpt);
  //   if (this.inpt){
  //   this.service.listTask().then((res: any) => res.json()).then(data => this.allTask(data)).catch(err => alert("cannot list"))
  //   }
  // }
  // ngDoCheck(): void {
  //   this.service.listTask().then((res: any) => res.json()).then(data => this.allTask(data))
    
  // }
  deleteTask(id:number){
    this.service.deleteTask(id).then((res: any) => res.json()).then(data=>console.log(data))
  }
}
