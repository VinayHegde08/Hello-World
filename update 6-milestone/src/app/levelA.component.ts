import { Component,OnInit } from '@angular/core';
import { LevelAService } from './levelA.service';

@Component({
  selector: 'my-levelA',
  templateUrl: './levelA.component.html',
  styleUrls: ['./levelA.component.css']
})


export class LevelAComponent implements OnInit{

  constructor(private _lvlAserv:LevelAService)
  {
  }
 public heading:string='I love the future';
 public image:string= "http://lorempixel.com/400/200";
 public textcolor:string='blue';
 public texttwoway:string;
 public eval:any[]=[{"name":"AYAN","class":"10","rating":"4"},{"name":"ANIK","class":"12","rating":"5"}]
 changetextclor()
 {
   if(this.textcolor=='blue')
   {
        this.textcolor='green';
   }
  else
   {
        this.textcolor='blue';
   }
 
}
 ngOnInit():void
     {
          this.eval=this._lvlAserv.getevals();
     }
}