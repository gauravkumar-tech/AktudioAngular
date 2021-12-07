
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/**
 * @author gaurav.kumar
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sidebar: any;
  
  ngOnInit(): void {
    this.setDate(); 
    this.sidebar=this.rout.config;
  }
  title = 'Ak Studio';

  newDate:Date= new Date();

  constructor(private rout:Router) { }

  setDate(){
    setTimeout(() => {
      this.newDate= new Date();
      this.setDate();
    }, 1000);
  }


  loadPage(page:string){
    let url="/"+page;
    this.rout.navigateByUrl(url)
  }

}
