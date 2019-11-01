import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  postData:ProductModel = new ProductModel("","Ranital","15");

  constructor(private http:HttpClient){}
ngOnInit(){

//  this.sendData();
// this.recievePosts();
}

  sendData(){
    this.http.post('http://localhost:3000/produktet', this.postData).subscribe();
  }
  
   
   recieveData(){
     this.http.get('http://localhost:3000/produktet').subscribe(produktet =>{
       console.log(produktet);
     })
   }

}
