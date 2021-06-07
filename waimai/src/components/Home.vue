
<template>
    <div>
        <van-nav-bar title="正在定位..." right-text="登录|注册" right-arrow>
            <template #left>
                <van-icon name="search" size="18" color='white'/>
            </template>
       </van-nav-bar>
       <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in tupian" :key="index">
                <van-grid square >
                  <van-grid-item v-for="(item,index) in tupian" :key="index" :icon=" 'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT'+item.photo" :text="item.name" />
                </van-grid>
            </van-swipe-item>
        </van-swipe> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <van-grid square>
                  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="甜品饮品" />
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid square>
                  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid square>
                  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </van-swipe-item>
            <van-swipe-item>
                <van-grid square>
                  <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </van-swipe-item>
       </van-swipe>
       <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
       <template #tag>
           <van-tag color="yellow" text-color="black" size="medium">热销</van-tag>
       </template>
            <template #tags>
                <van-rate v-model="value" :count="5" />
                <div style="width:'10px';"></div>
                <van-tag plain type="danger">联想教育</van-tag>
            </template>

            <template >
                <van-button size="mini">保</van-button>
                <van-button size="mini">准</van-button>
                <van-button size="mini">票</van-button>
            </template>
        </van-card>
        
    </div>
</template>
<script>
export default {
  name: 'home',
  data(){
      return{
         tupian:null,
         value:4
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
}
</script>
