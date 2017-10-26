<template>
    <div>
      <MHeader :back="true"> 添加</MHeader>
      <div class="content">
        <div>
        <label for="bookName">书名</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </div>
        <div>
          <label for="bookCover">封面</label>
          <input type="text" id="bookCover" v-model="book.bookCover">
        </div>
        <div>
          <label for="bookInfo">详情</label>
          <input type="text" id="bookInfo" v-model="book.bookInfo">
        </div>
        <div>
          <label for="bookPrice">价格</label>
          <input type="text" id="bookPrice" v-model="book.bookPrice">
        </div>
      </div>

    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
    export default {
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


</style>
