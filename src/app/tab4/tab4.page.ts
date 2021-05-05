import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  // 利用双向数据绑定获取输入框的值
  uname="";
  upwd="";
  
  constructor(public http:HttpClient,public alert:AlertController) { }

  ngOnInit() {
    
  }

  doLogin(){
    console.log(this.uname,this.upwd);

    let url="http://101.96.128.94:9999/data/user/login.php";
    let body=`uname=${this.uname}&upwd=${this.upwd}`;

    // 配置: POST请求需要一些配置 和 服务器的要求必须一致才可以
    // 登录接口 服务器要求: 请求头的内容类型 必须是 application/x-www-form-urlencoded
    let options={
      headers:{
        "content-type":"application/x-www-form-urlencoded"
      },
    };

  // 正确的用户名和密码: doudou  123456
​
  // POST方式 要求  地址 和 参数 必须分开发

    this.http.post(url,body,options).subscribe((res:any)=>{
      console.log(res);

      let {code,msg}=res;

      if(code==200){
        this.alert.create({message:"恭喜！登录成功！",buttons:["确定"]}).then(res=>res.present());
      }else{
        this.alert.create({message:"抱歉！登录失败！",buttons:["确定"]}).then(res=>res.present());
      }

    })
    
  }

}
