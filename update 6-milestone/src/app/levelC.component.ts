import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { employee } from '../models/employee.model';
import { Http } from '@angular/http';
import { DataService } from './services/data.service';
import { ToastComponent } from './shared/toast/toast.component';
declare let jsPDF;
@Component({
  selector: 'my-levelC',
  templateUrl: './levelC.component.html',
})


export class LevelCComponent implements OnInit
{
public heading3:string='Technical Form';
public languages:any=["english","bengali","spanish",];
public competencies:any=["C1","C2","C3","C4","C5","C6","C7","C8"];
public ratings:any=["1","2","3","4","5"];
public jds:any=["Angular 2","MEAN Stack","Hadoop","Cloud","Java","Dot Net"];

model=new employee("","","","","default","default","default","default","default","default","default","default","","","","","","","");
public hasplerror=false;
public hascompetencyerror=false;
public hasquestion1error=false;
public hasquestion2error=false;
public hasquestion3error=false;
public hasquestion4error=false;
public hasquestion5error=false;
public hasquestion0error=false;
public result="selected";
  constructor(private http: Http,
              private dataService: DataService,
              public toast: ToastComponent) { }
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
vquestions0(valuezero){
 if(this.model.q0==="default")
  {
this.hasquestion0error=true;
  }
  else 
  {
    this.hasquestion0error=false;
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
 

goSubmit(){
var val=parseInt(this.model.q1)+parseInt(this.model.q2)+parseInt(this.model.q3)+parseInt(this.model.q4)+parseInt(this.model.q5);
var resu= val/5;
if(resu>3){
this.result= resu+ " out of 5 selected";
}else{
 this.result= resu+ " out of 5 not selected";
}
console.log(this.model);
    this.dataService.addjson(this.model).subscribe(
      res => {
        const newCat = res.json();
        this.toast.setMessage('json added successfully.', 'success');
      },
      error => console.log(error)
    );
}


convert(){
 var doc = new jsPDF();
        
        doc.text(this.model.firstname, 10, 10);
        doc.text(this.model.lastname, 10, 20);
        doc.text(this.model.dob, 10, 30);
        doc.text(this.model.email, 10, 40);
        doc.text(this.model.primarylanguage, 10, 50);
        doc.text(this.model.competency, 10, 60);
        doc.text(this.model.q0, 10, 70);
        doc.text(this.model.q1, 10, 80);
        doc.text(this.model.q2, 10, 80);
        doc.text(this.model.q3, 10, 90);
        doc.text(this.model.q4, 10, 100);
        doc.text(this.model.q5, 10, 110);
        doc.text(this.model.skill1, 10, 120);
        doc.text(this.model.skill2, 10, 130);
        doc.text(this.model.skill3, 10, 140);
        doc.text(this.model.skill4, 10, 150);
        doc.text(this.model.skill5, 10, 160);
        doc.text(this.model.comskills, 10, 170);
        doc.text(this.model.slct, 10, 180);
        
            // doc.rect(20, 20, 10, 10); // empty square  

        doc.save('a1.pdf');
}

ngOnInit()
{
  
}

}

