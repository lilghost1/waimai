<template>
<div>
  <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
          <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
          <van-tabbar-item icon="bill-o" to="/indent">订单</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
        </van-tabbar>
<van-nav-bar title="订单列表"></van-nav-bar>
<van-tabs v-model="active">
  <van-tab title="外卖订单">
       <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell >
      <div v-for="item in list" :key="item" :title="item" >
        <van-card thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
          <template #title>
             <h3>蛟龙豆捞</h3>
          </template>
          <template #desc>
             <p style="color:#75746D">红薯薏米粥等1件商品</p>
          </template>
          <template #footer>
            <van-button size="mini" round>删除订单</van-button>
            <van-button size="mini" plain round color="#00A67C">再来一单</van-button>
          </template>
        </van-card> <br>
      </div>
            </van-cell>
            </van-list>
        </van-pull-refresh>
  </van-tab>
  <van-tab title="待评价">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell >
      <div v-for="item in list" :key="item" :title="item" >
        <van-card thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
          <template #title>
             <h3>红薯薏米</h3>
          </template>
          <template #desc>
             <p style="color:#75746D">红薯薏米粥等1件商品</p>
          </template>
          <template #footer>
            <van-button size="mini" round>删除订单</van-button>
            <van-button size="mini" plain round color="#00A67C">再来一单</van-button>
          </template>
        </van-card> <br>
      </div>
            </van-cell>
            </van-list>
        </van-pull-refresh>
  </van-tab>
  <van-tab title="退款">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell >
      <div v-for="item in list" :key="item" :title="item" >
        <van-card thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
          <template #title>
             <h3>土豆丝</h3>
          </template>
          <template #desc>
             <p style="color:#75746D">红薯薏米粥等1件商品</p>
          </template>
          <template #footer>
            <van-button size="mini" round>删除订单</van-button>
            <van-button size="mini" plain round color="#00A67C">再来一单</van-button>
          </template>
        </van-card> <br>
      </div>
            </van-cell>
            </van-list>
        </van-pull-refresh>
  </van-tab>
  <van-tab title="其他订单">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell >
      <div v-for="item in list" :key="item" :title="item" >
        <van-card thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
          <template #title>
             <h3>铁锅炖</h3>
          </template>
          <template #desc>
             <p style="color:#75746D">红薯薏米粥等1件商品</p>
          </template>
          <template #footer>
            <van-button size="mini" round>删除订单</van-button>
            <van-button size="mini" plain round color="#00A67C">再来一单</van-button>
          </template>
        </van-card> <br>
      </div>
            </van-cell>
            </van-list>
        </van-pull-refresh>
  </van-tab>
</van-tabs>
</div>
</template>
<script>
export default {
    name:'indent',
    data() {
        return {
        active: 0,
        value:null,
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
        };
    },
    methods: {
        onLoad() {
        setTimeout(() => {
            if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
            }

            for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
            }
            this.loading = false;

            if (this.list.length >= 40) {
            this.finished = true;
            }
        }, 1000);
        },
        onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
        },
    },
    };
</script>