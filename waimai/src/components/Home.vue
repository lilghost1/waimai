
<template>
    <div>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
          <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
          <van-tabbar-item icon="bill-o" to="/indent">订单</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
        </van-tabbar>
        <van-nav-bar :title="positionAddress ?positionAddress :'正在定位...'">
          <div class="amap-page-container">
            <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
            </el-amap>
            <div class="toolbar">
              <!-- <span v-if="loaded">
                location: lng = {{ lng }} lat = {{ lat }}
              </span>
              <span v-else>正在定位</span> -->
            </div>
          </div>
            <template #right @click-right="clickRight">
               <a href="#/login" style="color:white">登录&nbsp;</a>
               <a href="#/register" style="color:white">|&nbsp;注册</a>
            </template>
            <template #left>
                <van-icon name="search" size="18" color='white'  @click="clickLeft"/>
            </template>
       </van-nav-bar>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <van-grid :column-num="4">  
                  <van-grid-item :text="item.name" v-for="item in data" :key="item.id" 
                  :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"/>
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid>  
                  <van-grid-item :text="item.name" v-for="item in data" :key="item.id" 
                  :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"/>
                </van-grid>
            </van-swipe-item>
       </van-swipe>
       <div style="font-size:15px;margin:20px">
           <br>
           <van-icon name="wap-nav" />  附近商家
       </div>
        <div v-for="item in merchant" :key="item.id">
        <van-card num="2"  :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo">
         <template #desc>
           <span style="float:left" >
              <b><van-tag color="#F8D959" text-color="black" size="small" style="margin-top:19px">品牌</van-tag></b>
              <!-- <p size="8px">{{item.notice}}</p> -->
           </span>
         </template>
         <template #title>
           <a :href="'/#/merchant/'+item.id" style="color:black">
            <div style="margin-left:40px;margin-bottom:-35px;font-size:14px"><strong>{{item.name}}</strong></div> 
            </a>         
         </template>
         <template #tags>
           <br>
           <div style="float:right;overflow:hidden;">
             <b><van-tag color="#F8D959" text-color="black" size="small">保</van-tag> </b>
             <b> <van-tag color="#F8D959" text-color="black" size="small">准</van-tag> </b>
              <b><van-tag color="#F8D959" text-color="black" size="small">票</van-tag></b>
             </div> <br>
              <div style="margin-top:15px">
                <!-- <van-rate v-model="value" :count="5" size="12px"/> &nbsp; -->
                <van-rate v-model="item.goodsScore" size="12px" /><span>{{item.score}}</span>
                <span style="color:orange;margin-right:5px;">月销量{{item.sales}}单</span>
                <van-tag plain type="danger" color="orange" style="float:right">联想教育</van-tag>
              </div>
          </template>
          <template #price>
            <span>{{'¥'+item.minPrice+'起送/配送费约'+'¥'+item.transportationPrice}}</span>
         </template>
       </van-card>
       </div>
    </div> 
</template>
<script>
export default {
  name: 'home',
  data(){
    let self = this;
      return{
        value:4,
        data:'',
        Category:""  ,//存储请求的图片
        active:0,
        merchant:"", //商家信息
        center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(result);
                // console.log(result.addressComponent.township);
                if (result && result.position) {
                  var len = result.addressComponent.township.length;
                  var index = result.formattedAddress.indexOf(
                    result.addressComponent.township
                  );
                  self.positionAddress = result.formattedAddress.substring(
                    index + len
                  );
                  // self.lng = result.position.lng;
                  // self.lat = result.position.lat;
                  // self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            },
          },
        },
      ],
      }
  },
//   methods:{
//       fetchData:function(){
//           var app = this;
//           this.$http.post("/biz/queryBigCategory").then(function(res){
//               console.log(res.data);
//               app.tupian = res.data;
//           })
//       }
//   },
methods:{
  clickRight(){
       this.$router.push("/login")
  },
  clickLeft(){
    this.$router.push("/search")
  }
},
beforeRouteEnter(to,from,next){
  next(function(vm){
    vm.$http.post("/biz/queryBigCategory").then(function(res){
      vm.data = res.data;
      console.log(res.data);
    })
  })
},
beforeRouteUpdate(to,from,next){
  var app = this;
  this.$http.post('/biz/queryBigCategory').then(function(res){
    console.log(res.data);
    app.data = res.data;
  })
  next()
},
created(){
    var app=this
   this.$http.get("/biz/queryAllShopsInfo").then(function(res){
       console.log(res.data)
       app.merchant=res.data
   }) 
}
}
</script>
