<template>

      <ul class="list">
      <li v-for="(h,index) in imgList">
      <img :src="h" class="img">
          <span>{{msg[index].Chinese}}</span>
          <span>{{msg[index].English}}</span>
      </li>
      </ul>

</template>

<script>
    export default {
      props:['imgList'],
        data() {
            return {
              msg: [
                {Chinese:'餐厨',English:'Kitchen & tabletop'},
                {Chinese:'家居',English:'Home decor'},
                {Chinese:'园艺',English:'Garden'},
                {Chinese:'配饰',English:'Accessories'},
                {Chinese:'养护',English:'Care'}
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

<style scoped>
  .img{
    height: 150px;
    width: 100%;}
</style>
