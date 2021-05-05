import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public http:HttpClient) {}

  ngOnInit(): void {
    
    this.getData();
    
  }
  // 考虑到: 下拉刷新 加载更多 首次  3个位置都要发请求, 所以地址复用!
  url='http://101.96.128.94:9999/data/product/list.php?pno=';
  baseUrl="http://101.96.128.94:9999/";
  res:Res;

  getData(){
    
    this.http.get(this.url+1).subscribe((res:Res)=>{
      console.log(res);
      this.res=res;
    })

  }

  doRefresh(event){
    this.http.get(this.url+1).subscribe((res:Res)=>{
      console.log(res);
      this.res=res;
      event.target.complete();
      
    })
    
  }

  loadData(event){
    let url=this.url+(this.res.pno+1);
    this.http.get(url).subscribe((res:Res)=>{
      res.data=this.res.data.concat(res.data);
      this.res=res;

      event.target.complete();
    })
  }

}

interface Data{
  is_onsale: string;
  lid: string;
  pic: string;
  price: string;
  sold_count: string;
  title:string;
}

interface Res{
  data: Data[];
  pageCount:number;
  pageSize: number;
  pno:number;
  recordCount: number;
}