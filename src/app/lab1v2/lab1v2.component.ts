import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1v2',
  templateUrl: './lab1v2.component.html',
  styleUrls: ['./lab1v2.component.css']
})
export class Lab1v2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student = [
    {
      fullName:'Nguyễn Văn Tèo',
      birthday:'20-01-1999',
      gender :'Nam',
      photo :'boy.jpg',
      mark:8.5
    },
    {
      fullName:'Phan thị nở',
      birthday:'20-12-1999',
      gender :'Nữ',
      photo :'girl.jpg',
      mark:8.5
    },
    {
      fullName:'Nguyễn Khá Bảnh',
      birthday:'20-01-2000',
      gender :'Nam',
      photo :'kb.jpg',
      mark:8.5
    }
  ]
}
