<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">
      <img :src="slide" class="img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:['swiperSlides'],
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          loop:true,
          autoplay: 3500,
          autoplayDisableOnInteraction:false,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
        },

      }
    }
  }
</script>

<style scoped>
.img{
  height: 150px;
  width: 100%;}
</style>
