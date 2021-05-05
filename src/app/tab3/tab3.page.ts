import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  res:Res;

  constructor(public http:HttpClient) {}
  
  
  ngOnInit(): void {
   let url="http://101.96.128.94:9999/mfresh/data/cart_detail_select.php?uid=459";

   this.http.get(url).subscribe((res:Res)=>{
     console.log(res);
     this.res=res;
   })
  }
}

interface Products{
  count: string;
  did: string;
  pic: string;
  pid: string;
  price: string;
  title1:string;
}

interface Res{
  products: Products[];
  uid: string;
}