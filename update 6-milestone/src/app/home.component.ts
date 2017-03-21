import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: 'app.component.html'
})


export class MyApp {

  constructor() {
}
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log("Home");
  
}
}