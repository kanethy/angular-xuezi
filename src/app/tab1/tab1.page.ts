import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  baseUrl="http://101.96.128.94:9999/";

  constructor(
    public http:HttpClient
  ) {}

  ngOnInit(): void {

   this.getData();
    
  }
   res:Res;
  getData(){
    this.http.get(this.baseUrl+"data/product/index.php").subscribe((res:Res)=>{
      console.log(res);
      this.res=res;
    })
  }

}

interface CarouselItems{
  cid: string;
  href: string;
  img: string;
  title: string;
}

interface Items{
  details: string;
  href: string;
  pic: string;
  pid: string;
  price: string;
  title: string;
}

interface Res{
  carouselItems: CarouselItems[];
  newArrivalItems: Items[];
  recommendedItems: Items[];
  topSaleItems: Items[]
}