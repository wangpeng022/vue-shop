<template>
   <div>
     <MHeader :back="true">居安园</MHeader>
   <div class="content">
     <Swiper :swiperSlides="sliders"></Swiper>
     <Loading :isLoading="isLoading" :data="imgList"></Loading>

     <template v-if="!isLoading&&imgList.length">
       <Goods></Goods>
       <imgList :imgList="imgList"></imgList>
     </template>
   </div>
   </div>
</template>

<script>
   import MHeader from '../base/MHeader.vue';
      import  Swiper from '../base/Swiper.vue';
      import Loading from '../base/Loading.vue';
      import Goods from './Goods.vue';
      import imgList from './imgList.vue';
      import axios from 'axios';
    export default {
        data() {
            return {sliders:[],isLoading:true,imgList:[]}
        },
        created() {
         this.getSliders();
        setTimeout(()=>{
          this.getImg();

        },1000);
        },
        methods: {
         getSliders(){
           axios.get('/api/sliders').then(res=>{this.sliders=res.data;})
         },
          getImg(){
            axios.get('/api/imgList').then(res=>{
              this.imgList=res.data;
              this.isLoading=false;

            })
          }

        },
        computed: {},
        components: {MHeader,Swiper,Loading,Goods,imgList}
    }
</script>

<style scoped lang="less">
.book{
  display: flex;
  flex-wrap: wrap;
  li{
    padding: 5px;box-sizing: border-box;
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    img{
      height: 100px;
      width: 80%;}

    :nth-child(3){
      color:#2a2a2a;
      font-weight: 200;
    }
  }
}

</style>
