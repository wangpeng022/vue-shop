<template>
    <div>
      <div class="head"></div>
      <Login ></Login>
     <router-link  to="/register">注册</router-link>
    </div>
</template>

<script>
  import Login from './Login.vue';

    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {Login}
    }
</script>


<style scoped lang="less">

    .login{
      position: absolute;
      top: 0;
      left: 0;

    }




</style>
