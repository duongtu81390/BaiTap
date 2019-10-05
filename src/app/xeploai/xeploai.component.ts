import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xeploai',
  templateUrl: './xeploai.component.html',
  styleUrls: ['./xeploai.component.css']
})
export class XeploaiComponent implements OnInit {
  sv =
    {
      hoten: null,
      ngaysinh: null,
      gioitinh: 'Nam',
      diem: null,
      hocluc: null,
    }
  constructor() { }

  ngOnInit() {
  }
  xeploai() {
    if (this.sv.diem < 5)
      this.sv.hocluc = 'Rot';
    else
      this.sv.hocluc = "Dau";
    return this.sv.hocluc;
  }
}
