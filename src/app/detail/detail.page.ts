import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  
 res:Res;
 baseUrl="http://101.96.128.94:9999/";

  constructor( public route:ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    console.log(this.route);
    let lid=this.route.snapshot.params.lid;
    let url="http://101.96.128.94:9999/data/product/details.php?lid="+lid;

    this.http.get(url).subscribe((res:Res)=>{
      console.log(res);
      this.res=res;
    })
  }


    // 把html代码中的相对路径改为绝对路径
    transHTML(html: string) {
      // src="img"
      // 改为 :
      // src="http://101.96.128.94:9999/img"
      return html.replace(/src="img/g, 'src="http://101.96.128.94:9999/img');
       // g: 全局搜索,  从 html中搜出所有符合的字符串 替换成参数2
  }

}

interface PicList{
  laptop_id: string;
  lg: string;
  md: string;
  pid: string;
  sm: string;
}

interface Details{
  category: string;
  cpu: string;
  details: string;
  disk: string;
  family_id: string;
  is_onsale: string;
  lid: string;
  lname:string;
  memory: string;
  os: string;
  picList: PicList[];
  price: string;
  promise: string;
  resolution: string;
  shelf_time: string;
  sold_count: string;
  spec: string;
  subtitle: string;
  title: string;
  video_card: string;
  video_memory: string;
}

interface Res{
  details: Details;
  family:any;
}