import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1v2';
  s = {
    fullName:'Nguyễn Văn Tèo',
    birthday:'20-01-1999',
    gender :'Nam',
    photo :'boy.jpg',
    mark:8.5
    }
}
