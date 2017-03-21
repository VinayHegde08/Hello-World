import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { employee } from '../models/employeec.model';

@Component({
  selector: 'my-levelD',
  templateUrl: './levelD.component.html',
})


export class LevelDComponent implements OnInit
{
public heading3:string='Cultural Form';
public languages:any=["English","Bengali","Spanish",];
public competencies:any=["C1","C2","C3","C4","C5","C6","C7","C8"];
public ratings:any=["1","2","3","4","5"];
model=new employee("","","","","default","default","default","default","default","default","default","","","","","","","");
public hasplerror=false;
public hascompetencyerror=false;
public hasquestion1error=false;
public hasquestion2error=false;
public hasquestion3error=false;
public hasquestion4error=false;
public hasquestion5error=false;


vprimarylanguage(value1)
{
  if(this.model.primarylanguage==="default")
  {
this.hasplerror=true;
  }
  else
  {
this.hasplerror=false;
  }
}
vcomptency(value2)
{
  if(this.model.competency==="default")
  {
this.hascompetencyerror=true;
  }
  else
  {
this.hascompetencyerror=false;
  }
}
vquestions1(valueone)
{
 if(this.model.q1==="default")
  {
this.hasquestion1error=true;
  }
  else 
  {
    this.hasquestion1error=false;
}
}
vquestions2(valuetwo){ 
  if(this.model.q2==="default")
  {
this.hasquestion2error=true;
}
  else
  {
this.hasquestion2error=false;

  }
}
vquestions3(valuethree){ 
  if(this.model.q3==="default")
  {
this.hasquestion3error=true;
}
  else
  {
this.hasquestion3error=false;

  }
}
vquestions4(valueour){ 
  if(this.model.q4==="default")
  {
this.hasquestion4error=true;
}
  else
  {
this.hasquestion4error=false;

  }
  
}
vquestions5(valuefive){ 
  if(this.model.q5==="default")
  {
this.hasquestion5error=true;
}
  else
  {
this.hasquestion5error=false;

  }
  
}








ngOnInit()
{
}

}

