import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-levelB',
  templateUrl: './levelB.component.html',
})


export class LevelBComponent implements OnInit
{
public heading2:string='Second component';

todos;
public text:string;

constructor()
{
}
ngOnInit()
{
  this.todos=[{text:"Disturb Friends"},{text:"Search and Pet a kitten"}];
  
}
addTodo()
  {
this.todos.push({text:this.text});
// console.log(this.text);
}
  }

