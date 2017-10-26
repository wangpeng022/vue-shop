<template>

  <ul class="list">
    <li v-for="(h,index) in imgList">
      <img :src="h" class="img">
      <div class="mask">
        <p>{{msg[index].Chinese}}</p>
        <p>{{msg[index].English}}</p>
      </div>
    </li>
  </ul>

</template>

<script>
  export default {
    props: ['imgList'],
    data() {
      return {
        msg: [
          {Chinese: '餐 厨', English: 'Kitchen & tabletop'},
          {Chinese: '家 居', English: 'Home decor'},
          {Chinese: '园 艺', English: 'Garden'},
          {Chinese: '配 饰', English: 'Accessories'},
          {Chinese: '养 护', English: 'Care'}
        ]

      }
    },
    created() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="less">
  li {

    position: relative;
    .img {
      /*height: 150px;*/
      width: 100%;
      margin-top: -4px;
    }
    .mask {
      position: absolute;
      bottom: 80px;
      left: 50px;
      p{
        color: white;
      }
    }
  }
</style>
