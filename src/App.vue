<template>
 <div>
   <router-view></router-view>
   <Tab></Tab>
 </div>
</template>

<script>
  import Tab from './base/Tab.vue';
export default {
  components: {Tab}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;}
  a{text-decoration: none;}
  input,button{-webkit-appearance: none;}
  body,html{
    width: 100%;overflow:hidden;}
  .content{
    position: fixed;
    top:40px;
    bottom: 40px;
    left: 0;
    right: 0;overflow-y: scroll;
  }
</style>
