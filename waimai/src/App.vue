<template>
  <div id="app">
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
        Toast,
    },
  data() {
       return {
         active: 0,
         value:""
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
