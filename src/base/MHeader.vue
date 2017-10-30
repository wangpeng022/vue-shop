<template>
    <div class="header">
   <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
      <slot></slot>
      <div class="login-no" v-if="!user.name">
        <router-link to="/login">未登录</router-link>
      </div>
      <div class="login-success" v-if="user.name">{{user.name}}</div>
    </div>

</template>

<script>
  import {mapState} from 'vuex';
    export default {
     props:['back'],
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {
       go(){this.$router.back();}
        },
      computed: mapState({user:state=>state.user}),
        components: {}
    }
</script>

<style scoped lang="less">
  .login-no,.login-success{
    position: absolute;
    top: 0;
    right: 5px;
    color:#5e1616;
  }
.header{

  height: 40px;background:#FFFAF0;color:black;text-align: center;line-height: 40px;position: relative;
 i{
   position: absolute;
   left: 20px;font-size: 20px;}
}

</style>
