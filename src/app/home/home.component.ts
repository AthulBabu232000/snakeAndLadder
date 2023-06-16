import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('containerDiv',{static:false}) containerDiv!:ElementRef
@ViewChild('outerDiv',{static:false}) outerDiv!:ElementRef
@ViewChild('innerDiv1',{static:false}) innerDiv1!:ElementRef//player1
@ViewChild('innerDiv2',{static:false}) innerDiv2!:ElementRef//player2
  constructor() { }
  boardArray:number[]=[]//nxt 3 used to generate no.div in that order.
  temp:number[]=[];
  counter:number=0;
  randomInteger:number=0;//random number between 1 and 6 including both
  player1:number=0;
  player2:number=0;
  playerCounter:number=0;//choses player1 or player2 
  toDivId:number=0;//to which div should the coin move
  firstTry1:boolean=false;
  firstTry2:boolean=false;

  inputBtn=document.querySelector('.btn');
//btnClick=>randomIntegerGenerator=>playerSelector=>playersValueSetter=>handleInputValue; function flow
  playerSelector(){
    this.randomInteger==6?this.playerCounter==this.playerCounter:this.playerCounter++;
    this.randomInteger==1&&this.playerCounter%2==1?this.firstTry1=true:console.log("firstTry1 is false");
    this.randomInteger==1&&this.playerCounter%2==0?this.firstTry2=true:console.log("firsttry2 is false");
  try{ this.playersValueSetter();}
  catch(error){
    console.log(error);
  }
  }
  playersValueSetter(){
    if(this.playerCounter%2==0&&this.firstTry2==true){
      this.player2+this.randomInteger<=100?this.player2+=this.randomInteger:console.log("player2 score exceeds 100");
    }else if(this.playerCounter%2==1&&this.firstTry1==true){
      this.player1+this.randomInteger<=100?this.player1+=this.randomInteger:console.log("player1 score exceeds 100");
    }
    console.log("player1");
    console.log(this.player1);
    console.log("player2");
    console.log(this.player2);
    this.handleInputValue();
  }
  handleInputValue(){

    if(this.playerCounter%2==0){
      this.toDivId=this.player2;
      const toDiv=this.containerDiv.nativeElement.querySelector(`#box${this.toDivId}`);
      toDiv.appendChild(this.innerDiv2.nativeElement);

    }else{
      this.toDivId=this.player1;
      const toDiv=this.containerDiv.nativeElement.querySelector(`#box${this.toDivId}`);
      toDiv.appendChild(this.innerDiv1.nativeElement);
    }
   
  }

  randomIntegerGenerator(){
    this.randomInteger=Math.floor(Math.random()*6)+1;
    console.log(this.randomInteger);
    this.playerSelector();
  }

  ngOnInit(): void {
    for(let i=1;i<=10;i++){
     this.temp=[];
      for(let j=1;j<=10;j++){
        this.temp.push(101-(this.counter*10+j));
      }
      this.counter=this.counter+1;
      if(this.counter%2==0){
        this.temp.reverse();
        this.boardArray=this.boardArray.concat(this.temp);
      }else{
        this.boardArray=this.boardArray.concat(this.temp);
      }
    }
 console.log(this.boardArray)
  }

}
