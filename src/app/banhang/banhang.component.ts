import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit {

  item = [
    {
      name: 'Nước ngọt',
      price: 10000
    },
    {
      name: 'Cà phê đen',
      price: 12000
    },
    {
      name: 'Thuốc lá',
      price: 18000
    }
  ]
  custom = 
  {
    chon1:0,
    chon2:0,
    chon3:0,
    soluong1: null,
    soluong2:null,
    soluong3:null,
  }
  constructor() { }

  ngOnInit() {
  }
  tong1=null;
  tong2=null;
  tong3=null;
  thanhtien1(){
    if (this.custom.chon1==1)
    {
      this.tong1=this.custom.soluong1*10000;
      return this.custom.soluong1*10000
    }
  }
  thanhtien2(){
    if (this.custom.chon2==1)
    {
      this.tong2=this.custom.soluong2*12000;
      return this.custom.soluong2*12000
    }
  }
  thanhtien3(){
    if (this.custom.chon3==1)
    {
      this.tong3=this.custom.soluong3*18000;
      return this.custom.soluong3*18000
    }
  }
  tinhtong()
  {
    return this.tong1+this.tong2+this.tong3
  }
}
