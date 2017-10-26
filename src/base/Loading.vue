<template>
    <div>
      <div v-if="isLoading">
        <!--<div class="spinner"></div>-->
        <div class="loading"> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
      </div>

      <div v-if="!isLoading&&!data.length">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508946948710&di=b6658626b7f38763097bcc46ea1214e6&imgtype=0&src=http%3A%2F%2Fpic.35pic.com%2Fnormal%2F09%2F19%2F05%2F14151964_200536838000_2.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      props:['isLoading','data'],
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

<style scoped>
  .loading{ width: 150px; height: 15px; margin: 0 auto; margin-top:100px; text-align: center; } .loading span{ display: inline-block; width: 15px; height: 100%; margin-right: 5px; background: lightgreen; -webkit-animation: load 1.04s ease infinite; } .loading span:last-child{ margin-right: 0; } @-webkit-keyframes load{ 0%{ opacity: 1; } 100%{ opacity: 0; } } .loading span:nth-child(1){ -webkit-animation-delay:0.13s; } .loading span:nth-child(2){ -webkit-animation-delay:0.26s; } .loading span:nth-child(3){ -webkit-animation-delay:0.39s; } .loading span:nth-child(4){ -webkit-animation-delay:0.52s; } .loading span:nth-child(5){ -webkit-animation-delay:0.65s; }
img{
  position: relative;
  top: 100px;
  left: 33%;
  margin: 0 auto;
  width: 150px;
  height: 150px;}
</style>
