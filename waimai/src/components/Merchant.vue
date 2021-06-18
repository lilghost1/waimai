<template>
    <div>
<div class="top">商家详情</div>
<div class="content">
<van-image
  width="100"
  height="100"
  :src="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+this.details.photo"
/>
<div>
    <van-tag color="#FFED08"><b style="color:black">品牌</b></van-tag>
    <span>{{details.name}}</span>
</div>
<div style="font-size:15px">
    <span>{{details.goodsScore}}</span>
    <span>月售{{details.sales}}单</span>
    <span>联想教育</span>
    <span>约{{details.transportationPrice}}分钟</span>
    <span>距离{{details.distance}}米</span>
</div>
<div style="font-size:15px">
<van-tag color="#F1EE4D"><b style="color:white">首单</b></van-tag>
    <span  v-for="item in coupons" :key="item.id">{{item.tag}}{{item.contents}}</span>
    <span>{{coupons.length}}个优惠</span>
</div>
</div>
<van-tabs v-model="activeName">
  <van-tab title="点餐" name="a">  
<van-sidebar v-model="activeKey" class="add">
  <van-sidebar-item :title="item.name"  v-for="item in classified" :key="item.id"  @click="onclass(item.id)"/>
</van-sidebar>
<div  v-for="item in commodity" :key="item.id"  >
   <van-card class="you"
  num="2"
  price="2.00"
  :desc="item.info"
  :title="item.name"
  :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
>
   </van-card> 
</div>
  </van-tab>
  <van-tab title="评价" name="b">
      <div class="left">
          <b  style="color:#F19D39; font-size:20px">{{details.score}}</b>
          <div style="font-size:15px"><b>综合评分</b></div>
          <div style="color:#ccc;font-size:15px">高于周边商家99%</div>
      </div>
      <div class="right">
            <van-rate v-model="details.score" size="15px"/><b>服务评分</b> <span>{{details.goodsScore}}</span>
            <van-rate v-model="details.score" size="15px"/><b>商品评分</b> <span>{{details.goodsScore}}</span><br>
            <b>送达时间:{{details.deliveryTime}}分钟</b>
      </div>
<p  style="height:15px;background-color:#F4F5F7"></p>
 <van-tabs type="card" background="#DCDDDE" color="#4AA478" title-inactive-color="white">
  <van-tab title="全部">
<van-card  v-for="item in remark" :key="item.id"
  :desc="item.comments"
  :title="item.account"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
   <van-rate v-model="item.score" size="15px" /> <br>
   <van-icon name="good-job-o" color="red" />
   <van-tag type="warning" >南瓜粥</van-tag>
  </template>
  </van-card>
  </van-tab>
  <van-tab title="满意">内容 2</van-tab>
  <van-tab title="不满意">内容 3</van-tab>
</van-tabs>
  </van-tab>
  <van-tab title="商家" name="c">
      <h3>配送信息</h3>
      <van-tag color="#7232dd">联想教育</van-tag><span style="margin-left:5px">由商家提供配送</span> <span>约{{details.transportationPrice}}分钟送达</span>
      <span>距离{{details.distance}}m</span>
      <p class="p1">配送费 ￥{{details.transportationPrice}}</p>
      <hr size=15px style=" background-color:#F4F5F7">
      <h3>活动与服务</h3>
      <div v-for="item in  coupons" :key="item.id">
            <p>
                <van-tag color="#7232dd">{{item.tag}}</van-tag>
                <span>{{item.contents}}</span>
            </p>
      </div>
<hr size=15px style=" background-color:#F4F5F7">
              <h3>商家实景</h3>
              <div class="bottom">
                  <van-image class="img"
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                  <van-image class="img"
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                  <van-image class="img"
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />     
              </div>
  </van-tab>
</van-tabs>
    </div>
</template>
<script>
export default {
name:'merchant',
props:['id'],
data(){
    return{
        details:'',//商家信息
        coupons:'', //优惠活动
        activeName:'a',
        activeKey:'0',
        value:'',
        classified:"",//分类
        commodity:"",//分类商品信息
        remark:"",//评语
    }
},
created(){
    var app=this
    //商家基本信息
   this.$http.get("/biz/queryInfoByShopId?shopId="+this.id).then(function(res){
       console.log(res.data)
       app.details=res.data
   }) ;
   //商家优惠活动
      this.$http.get("/biz//querySpecialOfferByShopId?shopId="+this.id).then(function(res){
       console.log(res.data)
       app.coupons=res.data
   }),
   //商家评语
   this.$http.get("/biz//queryCommentByShopId?shopId="+this.id).then(function(res){
       console.log(res.data)
       app.remark=res.data
   }) 
},
//分类信息
beforeRouteEnter(to,from,next){
   next(function(vm){
       vm.$http.get("/biz/queryFoodCategory?id="+vm.id).then(function(res){
           console.log(res.data)
            vm.classified=res.data;
           vm.$http.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+vm.id+"&foodcategoryId="+vm.classified[0].id).then(function(res){
            console.log(res.data)
            vm.commodity=res.data
           })
       })
   })
},
beforeRouteUpdata(to,from,next){
    var app=this;
    this.$http.get("/biz/queryFoodCategory?id="+this.id).then(function(res){
        console.log(res.data)
    })

},
methods:{
    //获取对应分类的商品
     onclass(index){
         var app=this
       this.$http.get("biz/queryFoodinfoByShopIdAndFoodCategoryId?shopId="+this.id+"&foodcategoryId="+index).then(function(res){
           console.log(res.data)
           app.commodity=res.data
       }) 
     }
}


}
</script>
<style>
.top{
    width: 100%;
    height: 40px;
    background: #00A67C;
    color: white;
    text-align: center;
    line-height: 40px;
}
.content{
    text-align: center;
}
.left{
    float: left;
    width: 230px;
    text-align: center;
}
.add{
    float: left;
}
.right{
    margin-top: 10px;
    width: 40;
}
.you{
    position: static;
}
h3{
    margin: 0 0 0 10px;
}
.van-tag{
    margin-top: 10px;
    margin-left: 10px;
}
.p1{
    color: gray;
    margin-left: 10px;
}
.img{
    margin-top: 10px;
    margin-left: 30px;
}

</style>


