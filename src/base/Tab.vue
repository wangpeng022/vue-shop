<template>
  <ul>
    <router-link to="/home" tag="li"><i class="iconfont icon-home1"></i>首页</router-link>
    <router-link to="/list" tag="li"><i class="iconfont icon-baoxiang"></i>爱淘</router-link>
    <router-link to="/collect" tag="li"><i class="iconfont icon-yduiweixin"></i>我的账号</router-link>
    <router-link to="/add" tag="li"><i class="iconfont icon-iconfontgengduo2"></i>我的订单</router-link>
  </ul>
</template>

<script>

    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {},
        computed: {},

    }
</script>

<style scoped lang="less">
  ul{
    position: fixed;
    height: 40px;
    bottom: 0;
    left: 0;
    font-size: 12px;
    width: 100%;display: flex;background: #FFEFDB;border-top: 1px solid 	#FFF68F;
    li{
      display: flex;color:	#8B8878;flex:1;flex-direction: column;justify-content: center;align-items: center;
    }
    .router-link-active{
      text-shadow: 1px 1px 1px 		#00CD00;
    }
  }

</style>
