<template>
    <div>
      <div class="item">
        <h3>用户名：</h3>
        <input type="text" id="userName" placeholder="请填写您的真实姓名" >
        <span id="spanName"></span>
      </div>
      <div class="item">
        <h3>手机号码：</h3>
        <input type="tel" id="userPhone" placeholder="请填写您常用的手机号">
        <span id="spanPhone"></span>
      </div>
      <div class="item">
        <h3>密码：</h3>
        <input type="password" id="userPass" placeholder="由6~12位数字和字母组成">
        <span id="spanPass"></span>
      </div>
      <!--<div class="item">-->
        <!--<h3>确认密码：</h3>-->
        <!--<input type="password" id="userPassConfirm" placeholder="">-->
        <!--<span id="spanPassConfirm"></span>-->
      <!--</div>-->

      <div class="item">
        <h3>性别：</h3>
        <input type="radio" id="man" name="sex" checked>
        <label for="man">男</label>

        <input type="radio" id="woman" name="sex">
        <label for="woman">女</label>
      </div>
      <a href="javascript:;"  class="submit" id="submit" @click="sub">提交注册信息</a>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        data() {
            return {
             registerInfo:{
               name:'',
               phone:'',
               password:'',
               sex:''
             }
            }
        },
        created() {
          this.getRegister();
        },
        methods: {
          getRegister(){
            axios.put('/api/user',this.registerInfo).then(res=>this.registerInfo =res.data);
          },
          sub(){
            if(this.registerInfo!=='undefined'){  this.$router.push('/home')}
            alert('注册失败')
          }

        },
        computed: {

        },
        components: {}
    }
</script>

<style scoped>
  input{
    height: 30px;
    width: 200px;
    outline:none;
    border-style: none;
  }

</style>
