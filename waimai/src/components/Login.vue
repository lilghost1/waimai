<template>
    <div>
        <van-icon name="arrow-left" size="30px" color="#ccc" style="margin: 10px" @click="goOff()"/>
        <h1 style="color:#02A774;text-align:center">硅谷外卖</h1>
         <van-tabs v-model="active">
  <van-tab title="登录">
    <van-form @submit="onSubmit">
  <van-field
    v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
  <van-field v-model="password" :type="inputText" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]">
          <template #right-icon> 
        <van-switch v-model="checked1" @click="loginInput" />
      </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="clickLogin">提交</van-button>
  </div>
</van-form>
  </van-tab> 
  <van-tab title="注册">
        <van-form @submit="onSubmit">
  <van-field
    v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
  <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]">
      <template #right-icon> 
        <van-switch v-model="checked" />
      </template>

  </van-field>
  <van-field v-model="name"  name="姓名" label="姓名" placeholder="姓名" :rules="[{ required: true, message: '请填写姓名' }]" />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="clickRegister">注册</van-button>
  </div>

</van-form>
  </van-tab>
 </van-tabs>
 
</div> 
</template>
<script>
export default {
    name:"login",
  data() {
    return {
      active:2,
      username: '',
      password: '',
      name:'',
      inputText:"password",
      checked:false,
      checked1:false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
     goOff(){
      this.$router.go(-1);
    },
    // 单击登录按钮触发事件
    clickLogin(){
// 因在回调函数里无法使用this所以提前赋值给app（app与this功能完全相同）
      var app = this
        // 发送ajax请求 ，提交登录信息
      this.$http.post("/user/login",{
        "account":this.username,   //用户名
	      "password":this.password    //密码
      }).then(function(res){    //回调函数，接收响应回消息
          console.log(res.data);  
          if(res.data ==null){   //判断返回的数据是否为空 若为空则给出提示。
            alert("用户名或密码不正确")
          }else{   // 不为空保存数据，并跳转页面
          app.name = res.data   //将登录的信息存进变量name
          app.$router.push("/home")  //转跳到主页面
          }
      })
    },
        clickRegister(){
      var app = this
      console.log("aaa")
      this.$http.post("/user/register",{
        "account":this.username,
	      "password":this.password
      }).then(function(res){
          console.log(res.data);
          app.name = res.data
      })
    },
   loginInput(){
     if(this.checked1){
       this.inputText='password';
     }else{
       
       this.inputText='text';
     }
   }
  },
};
</script>
 