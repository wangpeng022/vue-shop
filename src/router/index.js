import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Collect from '../components/Collect.vue';
import Add  from '../components/Add.vue';
import Care from '../components/Care.vue';
import Decorate from '../components/Decorate.vue';
import Garden from '../components/Garden.vue';
import jiaju  from '../components/jiaju.vue';
import Kitchen from '../components/Kitchen.vue';
import imgList from '../components/imgList.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {path:'',component:Home},
    {path:'/home',component:Home},
    {path:'/list',component:List},
    {path:'/collect',component:Collect},
    {path:'/add',component:Add},
    {path:'/care',component:Care},
    {path:'/decorate',component:Decorate},
    {path:'/garden',component:Garden},
    {path:'/jiaju',component:jiaju},
    {path:'/kitchen',component:Kitchen},
    {path:'/imgList',component:imgList},
  ]
})
