<template>
    <div>
       <van-nav-bar title="我的"></van-nav-bar>
       <div class="img">
         <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" style="margin-top:20px;margin-left:10px;"></van-image>
       </div>
         <div class="na">
           <div>张三</div>
           <van-icon name="phone-o"/>暂无绑定手机号
           <span class="arrow"><van-icon name="arrow"/></span>
         </div>
    <div class="count">
      <div class="left">
       <span><b style="color:#FFD892;">0.00元</b></span><br>
       <span class="p2">我的余额</span>
      </div>
      <div class="center">
         <span><b style="color:#F7B877;">0个</b></span><br>
         <span class="p2">我的优惠</span>
      </div>
      <div class="right">
        <span><b style="color:#A3C041;">0分</b></span><br>
        <span class="p2">我的积分</span>
      </div>
    </div>
    <ul class="list">
      <li>
        <van-icon name="sign"/>我的订单
        <span class="sp"><van-icon name="arrow"/></span>
      </li>
       <van-divider/>
      <li>
        <van-icon name="points"/>积分商城
          <span class="sp"><van-icon name="arrow"/></span>
      </li>
      <van-divider/>
      <li>
        <van-icon name="award-o"/>My外卖会员卡
        <span class="sp"><van-icon name="arrow"/></span>
      </li>
      <van-divider/>
      <li>
        <van-icon name="newspaper-o"/>服务中心
        <span class="sp"><van-icon name="arrow"/></span>
      </li>
      <van-divider/>
    </ul>
    <div class="b">
      <b>The past is gone, the future is gone</b>
      <p>往事不再过问，未来共赴前程</p>
    </div>
       <div>
        <van-tabbar v-model="active">
         <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
         <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
         <van-tabbar-item icon="friends-o" to="/dingdan">订单</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    </div>
</template>
<script>
export default {
    name:"user",
    data(){
      return{
         active: 0,
      }
    }
}
</script>
<style>
.van-nav-bar ,.img{
  border: 1px solid #00A67C;
  background-color: #00A67C;
}
.img{
  height: 100px;
}
.na{
  margin-top: -60px;
  margin-left: 100px;
  color: white;
}
.arrow{
  float: right;
  margin-top: -5px;
}
.count{
  margin-top: 20px;
  /* border: 1px solid gray; */
}
.left , .center, .right{
  width: 115px;
  height: 50px;
  display: inline-block;
  text-align: center;
  border: 1px solid gray;
}
.p2{
  color: gray;
  margin-top: 5px;
}
.list{
  margin-top: 10px;
}
.sp{
  float: right;
}
.b{
  text-align: center;
}
.b p{
  color: gray;
}
</style>