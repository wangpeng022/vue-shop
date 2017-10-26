<template>
    <div class="header">
   <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
      <slot></slot>
    </div>
</template>

<script>
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
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
.header{

  height: 40px;background:#FFFAF0;color:black;text-align: center;line-height: 40px;position: relative;
 i{
   position: absolute;
   left: 20px;font-size: 20px;}
}

</style>
