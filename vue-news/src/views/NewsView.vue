<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

// 데이터를 블러올때는 컴포는트를 등록해서 하는게 좋음.
<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users : []
    }
  },
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
    fetchNewsList()
    .then(function(response) {
      console.log(response);
      vm.users = response.data
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>

<style>

</style>

