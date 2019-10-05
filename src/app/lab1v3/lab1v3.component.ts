import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1v3',
  templateUrl: './lab1v3.component.html',
  styleUrls: ['./lab1v3.component.css']
})
export class Lab1v3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  spec = [
    {
      'ID': 'pd100',
      'img': 'laptop.jpg',
      'Name': 'Laptop',
      'Price': 30000,
      'Quantity': 0
    },
    {
      'ID': 'pd101',
      'img': 'dt.jpg',
      'Name': 'Mobile',
      'Price': 54000,
      'Quantity': 0
    },
    {
      'ID': 'pd102',
      'img': 'tv.jpg',
      'Name': 'Television',
      'Price': 22000,
      'Quantity': 0
    },
    {
      'ID': 'pd103',
      'img': 'tainghe.jpg',
      'Name': 'Headphone',
      'Price': 1300,
      'Quantity': 0
    }
  ]
  Tong() {
    let s = 0;
    //for (let i = 0; i < this.listproduct.length; i++) {
    //  s=s+this.listproduct[i].price;
    //}
    this.spec.forEach(function (item) {
      s = s + item.Price * item.Quantity;
    })
    return s;
  }
  Tang(id) {
    for (let i = 0; i < this.spec.length; i++) {
      if (this.spec[i].ID === id)
        this.spec[i].Quantity++;
    }
  }
  Giam(id) {
    for (let i = 0; i < this.spec.length; i++) {
      if (this.spec[i].ID === id && this.spec[i].Quantity > 0)
        this.spec[i].Quantity--;
    }

  }
}
