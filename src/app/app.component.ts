import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title= 'Angular 19';
 num = 0

//  handlePlus() {
//   this.num = this.num+1
//  }

//  handleMinus() {
//   if(this.num > 0)
//     this.num -=1 
//  }

//  handleReset() {
//   this.num = 0
//  }

 handleCounter(val:string) {
  if(val=='plus') {
    this.num = this.num+1
  } else if(val=='minus' && this.num > 0) {
    this.num -=1 
  } else {
    this.num = 0
  }
 }


 // input value get

 name='';
 dispaly='';

 phoneNum='';

 
 inputValue(event: Event) {
    this.name = (event.target as HTMLInputElement).value
 }

 inputPrint() {
  this.dispaly = this.name
 }


 getPhone(val:string) {
this.phoneNum =val
 }



}
