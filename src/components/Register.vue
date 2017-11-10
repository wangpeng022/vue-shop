<template>
  <div class="container">
    <div class="item">
      <span>-用户名-：</span>
      <input type="text" id="userName" placeholder="请填写您的真实姓名">
      <span id="spanName"></span>
    </div>
    <div class="item">
      <span>手机号码：</span>
      <input type="tel" id="userPhone" placeholder="请填写您常用的手机号">
      <span id="spanPhone"></span>
    </div>
    <div class="item">
      <span>-密--码-：</span>
      <input type="password" id="userPass" placeholder="由6~12位数字和字母组成">
      <span id="spanPass"></span>
    </div>
    <!--<div class="item">-->
    <!--<h3>确认密码：</h3>-->
    <!--<input type="password" id="userPassConfirm" placeholder="">-->
    <!--<span id="spanPassConfirm"></span>-->
    <!--</div>-->

    <a href="javascript:;" class="submit" id="submit" @click="sub">提交注册信息</a>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        sex: "man",
        registerInfo: {
          name: '',
          phone: '',
          password: '',
          sex: ''
        }
      }
    },
    created() {
      this.getRegister();
    },
    methods: {
      getRegister() {
        axios.put('/api/user', this.registerInfo).then(res => this.registerInfo = res.data);
      },
      sub() {
        if (this.registerInfo !== 'undefined') {
          this.$router.push('/home')
        }
        alert('注册失败')
      }

    },
    computed: {},
    components: {}
  }
</script>

<style scoped lang="less">
  .container {

    background:-webkit-gradient(linear, left top, 0 bottom, from(#ffa382), to(#9becff));
    background-size: 100%;
    padding: 30% 10px;
    font-size: 18px;
    text-align: center;
    color: white;
    .item {
      height: 70px;

    }
    .submit {
      display: block;
      width: 160px;
      height: 40px;
      color: white;
      text-align: center;
      line-height: 40px;
      background: #83f6ff;
      margin: 80px auto;
      border-radius: 20px;
    }
  }

  input {
    font-size: 18px;
    color: white;
    height: 30px;
    width: 200px;
    margin-top: 30px;
    border-style: none;
    outline: none;
    border-bottom: 1px solid white;
    background: rgba(0, 0, 0, 0);
  }

</style>
