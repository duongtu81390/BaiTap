import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1v1',
  templateUrl: './lab1v1.component.html',
  styleUrls: ['./lab1v1.component.css']
})
export class Lab1v1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  s = {
    fullName:'Nguyễn Văn Tèo',
    birthday:'20-01-1999',
    gender :'Nam',
    photo :'boy.jpg',
    mark:8.5
    }
}
