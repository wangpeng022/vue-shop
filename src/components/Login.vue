<template>
    <div>
        <div class="login">登录 Login</div>

        <div class="item">
          <h4>用户名： <input type="text" ref="userName" placeholder="请填写您的真实姓名或者手机号码" ></h4>

        </div>

        <div class="item">
          <h4>密     码  ： <input type="password" ref="userPass" placeholder="由6~12位数字和字母组成"></h4>

        </div>

        <a href="javascript:;" class="submit" ref="submit" @click="submit">确认登录</a>

    </div>
</template>

<script>
  import axios from 'axios';

    export default {
        data() {
            return {msg:[]}
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
          submit(){
            if(!this.msg.length){
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
  .submit{
    position: absolute;
    left: 22.5%;
    top: 160px;

    text-align: center;
  }

  input{
    height: 30px;
    width: 200px;
    margin-top: 30px;
  }
</style>
