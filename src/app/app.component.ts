import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cart';
  usersContentList = [];

  constructor(private apiCall:ApiCallService){

  }

  ngOnInit(){
    this.getJsonData();
  }

  getJsonData(){
    const url = 'https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json';
    this.apiCall.getCall(url).subscribe((data)=>{
      this.usersContentList =this.convertToArray(data);
      console.log('array :: ',this.usersContentList);
    })
  }

  convertToArray(obj){
      let array=[];
    array =   Object.entries(obj).map((item)=>{
      if(item && item[1]){
        return item[1];
      }
    })
    return array;
  }


}
