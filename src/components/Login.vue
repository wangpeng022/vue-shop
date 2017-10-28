<template>
  <div class="login">
    <div class="kt"></div>
    <div class=" kt kt2"></div>
    <div class=" kt kt3"></div>
    <div class="titl">登录 Login</div>
    <div class="item">
      <span>用户名：</span> <input type="text" ref="userName" placeholder="请填写您的真实姓名或者手机号码">
      <br/>
      <span>-密码-  ： </span><input type="password" ref="userPass" placeholder="由6~12位数字和字母组成">
    </div>
    <div class="submit">
    <a href="javascript:;"  ref="submit" @click="submit">确认登录</a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {msg: []}
    },
    created() {
      this.getLogin();

    },
    methods: {
      getLogin() {
        axios.post('/api/login').then(res => {
          this.msg = res.data;
        })
      },
      submit() {
        if (!this.msg.length) {
          this.$router.push('/home');
        }
        alert('登入失败，请重新登入')
      }
    },
    computed: {},
    components: {}
  }
</script>

<style scoped>
  @keyframes rr {
    0%{
      transform: translate(-50%,0) rotateZ(0deg);
    }
    50%{
      transform: translate(-50%,-2%) rotateZ(180deg);
    }
    100%{
      transform: translate(-50%,0) rotateZ(360deg);
    }
  }
  .login {
    width: 100%;
    height: 100%;
    text-align: center;
    background: url("http://sjbz.fd.zol-img.com.cn/t_s480x800c/g5/M00/00/03/ChMkJlfJVzmIFRkNAAYCjLaCWwYAAU-CgMozNwABgKk145.jpg") no-repeat ;
    background-size: 100%;
    overflow-x:hidden;
  }
  .login .kt{
    position: absolute;
    top: -210px;
    left: 180px;
    width: 250px;
    height: 250px;
    /*background: rgba(215, 69, 191, 0.2);*/
    background: rgba(255, 255, 255, 1);
    border-radius: 45%;
    animation: rr 3s infinite;
  }
  .login .kt2{
    left: 50px;
  }
  .login .kt3{
    left: 330px;
  }
  .item{
    margin-top: 80px;
  }
  .submit {
    width: 160px;
    height: 40px;
    line-height: 40px;
    background: #ffb790;
    margin: 50px auto;
    border-radius: 20px;
  }
  .submit a{
    color: white;
  }

  input {
    height: 50px;
    width: 200px;
    margin-top: 30px;
    border-style: none;
    outline: none;
    border-bottom: 1px solid white;
    background:rgba(0, 0, 0, 0);
  }
  .login .titl{
    font-size: 22px;
    margin-top: 100px;
  }
</style>
