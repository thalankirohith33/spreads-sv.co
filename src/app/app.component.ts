import { Component } from '@angular/core';
import {DataService} from './services/data.service';
declare const $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private data : DataService) {
   $('.ui.sidebar')
     .sidebar('attach events', '.toc.item')
   ;
 }
 logout()
 {
   this.data.logout();
 }
}
