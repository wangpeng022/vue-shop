<template>
  <ul>
    <router-link to="/kitchen" tag="li"><i class="iconfont icon-canchuyongpin"></i>餐厨</router-link>
    <router-link to="/jiaju" tag="li"><i class="iconfont icon-jiaju"></i>家居</router-link>

    <router-link to="/garden" tag="li"><i class="iconfont icon-_yuanyi"></i>园艺</router-link>
    <router-link to="/decorate" tag="li"><i class="iconfont icon-peishi"></i>配饰</router-link>
    <router-link to="/care" tag="li"><i class="iconfont icon-yanghu"></i>养护</router-link>
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
        components: {}
    }
</script>

<style scoped lang="less">
  ul{
    position: relative;
    height: 40px;
    top: -2.5px;
    left: 0;
    font-size: 12px;
    width: 100%;display: flex;background: #f1f1f1;
  li{
    display: flex;color:	black;flex:1;flex-direction: column;justify-content: center;align-items: center;
    color: black
  }
  .router-link-active{
    text-shadow: 1px 1px 1px 		#00CD00;
  }
  }

</style>
