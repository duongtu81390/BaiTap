import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HcnComponent } from './hcn/hcn.component';
import { XeploaiComponent } from './xeploai/xeploai.component';
import { RouterModule } from '@angular/router';
import { TinhluongComponent } from './tinhluong/tinhluong.component';
import { BanhangComponent } from './banhang/banhang.component';
import { Lab1v1Component } from './lab1v1/lab1v1.component';
import { Lab1v2Component } from './lab1v2/lab1v2.component';
import { Lab1v3Component } from './lab1v3/lab1v3.component';
import { Lab1v4Component } from './lab1v4/lab1v4.component';
import { Lab2Component } from './lab2/lab2.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import { SkillComponent } from './skill/skill.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HcnComponent,
    XeploaiComponent,
    TinhluongComponent,
    BanhangComponent,Lab1v1Component,
    Lab1v1Component,
    Lab1v2Component,
    Lab1v3Component,
    Lab1v4Component,
    Lab2Component,
    ProductdetailComponent,
    ProductComponent,
    SkillComponent,
    IndexComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ 
      
      {path: 'lab1v1', 	component:Lab1v1Component }, 
      {path: 'lab1v2', component:Lab1v2Component},
      {path: 'lab1v3', component:Lab1v3Component},
      {path: 'lab1v4', component:Lab1v4Component},
      {path: 'lab2', component:IndexComponent},
      {path: 'lab5v1', 	component: HcnComponent }, 
      {path: 'lab5v2', component:XeploaiComponent},
      {path: 'lab5v3', component:TinhluongComponent},
      {path: 'lab5v4', component:BanhangComponent},
      {path: 'detail', component:DetailComponent},
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
