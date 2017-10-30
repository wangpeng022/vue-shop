<template>
    <div class="header">
   <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
      <slot></slot>
      <div class="login-off" v-if="!user.name">
        <router-link to="/account">请登录</router-link>
      </div>
      <div class="login-on" v-if="user.name"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509366450781&di=e0f05bf43fb6f3315b319cac5a5abdab&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20165_3_1%2Fa8p4cd43856282559596.GIF" width="45%" ref="img" @click="fn"></div>
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
          go(){this.$router.back();},
          fn(){
              this.$refs.img.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAzCAYAAAAKLSELAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2M2ZjMjA4My03ZmFjLWEzNDAtYjUxNy02MzIxZGI1OTQ0YzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRCMkU1MkZCRDYxMTFFN0I2RDRENzJFQjY2OEVBQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRCMkU1MkVCRDYxMTFFN0I2RDRENzJFQjY2OEVBQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTJlNzU4ZWItOWIyMS04MjQ1LTlmNGYtMTJmZjU0MWU4YTAzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmNlN2U1NDEtYmQ1Zi0xMWU3LThkYjkt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";
              console.log(this.$refs)
          }
        },
      computed: mapState({user:state=>state.user}),
        components: {}
    }
</script>

<style scoped lang="less">
  .login-on,.login-off{
    text-align: right;
    position: absolute;
    top: 0;
    right: 10px;
    color:#5e1616;
  }
.header{
  height: 40px;background:#FFFAF0;color:black;text-align: center;line-height: 40px;
  position: relative;
 i{
   position: absolute;
   left: 20px;font-size: 20px;}
}

</style>
