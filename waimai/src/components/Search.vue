<template>
    <div>
      <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
          <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
          <van-tabbar-item icon="bill-o" to="/indent">订单</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
        </van-tabbar>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch">
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
        </van-search>
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
            <div style="margin-left:45px;margin-bottom:-35px;font-size:14px"><strong>{{item.name}}</strong></div>          
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

import { Toast } from 'vant';

export default {
    name:"search",
  data() {
    return {
      prop:[""],
        value:'',
        data:'',
        Category:""  ,//存储请求的图片
        active:0,
        merchant:"" //商家信息
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('搜索');
    },
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
};

</script>