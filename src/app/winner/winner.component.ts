import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
winner:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.winner=params.get('param');
    })
  }

}
