import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinhluong',
  templateUrl: './tinhluong.component.html',
  styleUrls: ['./tinhluong.component.css']
})
export class TinhluongComponent implements OnInit {
  list = [
    {
      tuoi: "Dưới 25 tuổi",
      tile: 0.07
    },
    {
      tuoi: "Từ 25 đến 40 tuổi",
      tile: 0.1
    },
    {
      tuoi: "Trên 40 tuổi",
      tile: 0.15
    }
  ]
  nv = {
    hoten:null,
    luong:null,
    gioitinh:1,
    tile:null,
  }
  constructor() { }

  ngOnInit() {
  }
  tinhthuong()
  {
    if (this.nv.gioitinh==1)
      return this.nv.luong*this.nv.tile
    else
      return this.nv.luong*this.nv.tile+200000;
  }
}
