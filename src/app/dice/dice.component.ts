import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnChanges {

  @Input() passRandomNumber!:number;
@Input() initialText!:string;
  
  dotCount:number=0;// randomInteger from parent home>>@input in child
  dotArray:number[]=[];
  constructor() { }

  arrayMaker(){
    for(let i=0;i<this.dotCount;i++){
      this.dotArray.push(0);
    }
    if(this.dotArray.length>0){
    this.initialText='';

    }

  }

  //calling simple changes on child dice
  ngOnChanges(changes:SimpleChanges){
    
    if(changes['passRandomNumber']){

      this.dotCount=this.passRandomNumber;
      
      this.dotArray=[];
      this.arrayMaker();
    }
  }

}
