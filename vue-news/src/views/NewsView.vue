<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news">{{ user.title }}</div> -->
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

// 데이터를 블러올때는 컴포넌트를 등록해서 하는게 좋음.
<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  // data() {
  //   return {
  //     users : []
  //   }
  // },
  created() {
    var vm = this;
    
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
    // fetchNewsList()
    // .then(function(response) {
    //   console.log(response);
    //   vm.users = response.data
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
    this.$store.dispatch("FETCH_NEWS");
  }
}
</script>

<style>

</style>

