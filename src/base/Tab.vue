<template>
  <ul>
    <router-link to="/home" tag="li">
      <div ref="huzi">
        <img src="http://img.qq1234.org/uploads/allimg/140827/10050MU3-4.jpg" alt="" width="80%" @click="start">
      </div>
      <i class="iconfont icon-home1"></i>首页</router-link>
    <router-link to="/list" tag="li"><i class="iconfont icon-baibaoxiang"></i>爱淘</router-link>

    <router-link to="/account" tag="li"><i class="iconfont icon-yduiweixin"></i>我的账号</router-link>

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
      mounted(){

      },
        methods: {
        start(e){
          this.$refs.huzi.style="display:none";
          setTimeout(()=>{
            this.$refs.huzi.style="display:block";
          },3000)
        },
          move(){

          },
        },
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
      display: flex;flex:1;flex-direction: column;justify-content: center;align-items: center;
      i{
        color: darkorange;
      }
    }
    .router-link-active{
      text-shadow: 1px 1px 1px #909090;
    }
  }

</style>
