<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
      <van-tabbar-item icon="search" to="/ss">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/dd">订单</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
   </van-tabbar>
       
      <router-view></router-view>
    </div>
    
</template>

<script>
// import { NavBar } from 'vant';
import { Grid, GridItem,Swipe, SwipeItem,Toast } from 'vant';
export default {
  name:"app",
  components:{
        Grid, 
        GridItem,
        Swipe, 
        SwipeItem,
        Toast
    },
  data() {
       return {
         active: 0,
    };
  },
  methods: {
    
  },
};
</script>
<style >

.van-nav-bar{
  border: 1px solid #00A67C;
  background-color: #00A67C;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #6c7580;
  }
</style>
