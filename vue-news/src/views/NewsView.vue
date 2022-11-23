<template>
  <div>
    <list-item></list-item>
  </div>
</template>

// 데이터를 블러올때는 컴포넌트를 등록해서 하는게 좋음.
<script>
// import { fetchNewsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  }
  // data() {
  //   return {
  //     users : []
  //   }
  // },
  // created() {
  //   var vm = this;
    
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
  //   this.$store.dispatch("FETCH_NEWS");
  // }
}
</script>


<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282
} */
</style>