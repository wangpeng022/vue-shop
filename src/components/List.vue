<template>
    <div>
      <MHeader :back="true">列表</MHeader>

      <div class="content">
        <Loading :isLoading="isLoading" :data="books"></Loading>
        <ul v-if="!isLoading||books.length">
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
           <div>
             <h4>{{book.bookName}}</h4>
             <p>{{book.bookInfo}}</p>
             <span>{{book.bookPrice}}</span>

             <div>
               <a>详情</a>
               <a>删除</a>
             </div>
           </div>

          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import Loading from '../base/Loading.vue';
  import axios from 'axios';
    export default {
      data() {
        return {isLoading:true,books:[]}
      },
        created() {
          setTimeout(()=>{
            this.getBooks();
          },1000);
        },
        methods: {
          getBooks(){
            axios.get('/api/book').then(res=>{
              this.books=res.data;
              this.isLoading=false;
            })
          }
        },
        computed: {},
        components: {MHeader,Loading}
    }
</script>

<style scoped lang="less">
ul{
  li{
    margin: 10px;
    display: flex;font-size: 16px;
    border-bottom: 1px solid darkkhaki;

    img{
      width: 100px;
      height: 120px;
    }

    div{
      display: flex;flex-direction: column;

      div{
        display: flex;flex-direction: row;
      a{
        padding: 5px;}
      }
    }
  }
}

</style>
